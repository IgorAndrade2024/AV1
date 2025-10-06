
import * as readlineSync from 'readline-sync';
import { Aeronave } from "./Aeronave";
import { Peca } from "./Peca";
import { Etapa } from "./Etapa";
import { Teste } from "./Teste";
import { Relatorio } from "./Relatorio";
import { TipoAeronave, TipoPeca, StatusPeca, StatusEtapa, TipoTeste, ResultadoTeste } from "./enums";

let aeronave: Aeronave | null = null;

function menu() {
	console.log("\n===== MENU DE CADASTRO =====");
	console.log("1. Cadastrar Aeronave");
	console.log("2. Cadastrar Peça");
	console.log("3. Cadastrar Etapa");
	console.log("4. Cadastrar Teste");
	console.log("5. Gerar Relatório");
	console.log("0. Sair");
	return readlineSync.questionInt("Escolha uma opção: ");
}

function cadastrarAeronave() {
	const id = readlineSync.question("ID da aeronave: ");
	const nome = readlineSync.question("Nome da aeronave: ");
	console.log("Tipo de aeronave: 0 - COMERCIAL, 1 - MILITAR");
	const ntipo = readlineSync.questionInt("Escolha o tipo: ");
    const tipo = ntipo === 0 ? TipoAeronave.COMERCIAL : TipoAeronave.MILITAR;
	const capacidade = readlineSync.questionInt("Capacidade: ");
	const autonomia = readlineSync.questionInt("Autonomia: ");
	aeronave = new Aeronave(id, nome, tipo, capacidade, autonomia);
	console.log("Aeronave cadastrada com sucesso!");
}

function cadastrarPeca() {
	if (!aeronave) { console.log("Cadastre uma aeronave primeiro!"); return; }
	const nome = readlineSync.question("Nome da peça: ");
	console.log("Tipo de peça: 0 - NACIONAL, 1 - IMPORTADA");
	const ntipo = readlineSync.questionInt("Escolha o tipo: ");
    const tipo = ntipo === 0 ? TipoPeca.NACIONAL : TipoPeca.IMPORTADA;
	const fornecedor = readlineSync.question("Fornecedor: ");
	console.log("Status da peça: 0 - PRONTA, 1 - EM_TRANSPORTE, 2 - INSTALADA");
	const nstatus = readlineSync.questionInt("Escolha o status: ");
    const status = nstatus === 0 ? StatusPeca.PRONTA : nstatus === 1 ? StatusPeca.EM_TRANSPORTE : StatusPeca.EM_PRODUCAO;
	aeronave.pecas.push(new Peca(nome, tipo, fornecedor, status));
	console.log("Peça cadastrada!");
}

function cadastrarEtapa() {
	if (!aeronave) { console.log("Cadastre uma aeronave primeiro!"); return; }
	const nome = readlineSync.question("Nome da etapa: ");
	const duracao = readlineSync.question("Duração: ");
	console.log("Status da etapa: 0 - PENDENTE, 1 - EM_ANDAMENTO, 2 - CONCLUIDA");
	const nstatus = readlineSync.questionInt("Escolha o status: ");
    const status = nstatus === 0 ? StatusEtapa.PENDENTE : nstatus === 1 ? StatusEtapa.ANDAMENTO : StatusEtapa.CONCLUIDA;
	const etapa = new Etapa(nome, duracao, status);
	aeronave.etapas.push(etapa);
	console.log("Etapa cadastrada!");
}

function cadastrarTeste() {
	if (!aeronave) { console.log("Cadastre uma aeronave primeiro!"); return; }
	console.log("Tipo de teste: 0 - ELETRICO, 1 - HIDRAULICO, 2 - AERODINÂMICO");
	const ntipo = readlineSync.questionInt("Escolha o tipo: ");
	const tipo = ntipo === 0 ? TipoTeste.ELETRICO : ntipo === 1 ? TipoTeste.HIDRAULICO : TipoTeste.AERODINAMICO;
	console.log("Resultado: 0 - APROVADO, 1 - REPROVADO");
	const nresultado = readlineSync.questionInt("Escolha o resultado: ");
	const resultado = nresultado === 0 ? ResultadoTeste.APROVADO : ResultadoTeste.REPROVADO;
	aeronave.testes.push(new Teste(tipo, resultado));
	console.log("Teste cadastrado!");
}

function gerarRelatorio() {
	if (!aeronave) { console.log("Cadastre uma aeronave primeiro!"); return; }
	const cliente = readlineSync.question("Nome do cliente: ");
	const relatorio = new Relatorio(aeronave, cliente, new Date());
	relatorio.salvarArquivo("relatorio.txt");
	console.log("Relatório gerado em relatorio.txt");
}

while (true) {
	const opcao = menu();
	switch (opcao) {
		case 1: cadastrarAeronave(); break;
		case 2: cadastrarPeca(); break;
		case 3: cadastrarEtapa(); break;
		case 4: cadastrarTeste(); break;
		case 5: gerarRelatorio(); break;
		case 0: console.log("Saindo..."); process.exit(0);
		default: console.log("Opção inválida!");
	}
}
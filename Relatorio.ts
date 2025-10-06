import { Aeronave } from "./Aeronave";
import fs from "fs";

export class Relatorio {
  constructor(private aeronave: Aeronave, private cliente: string, private dataEntrega: Date) {}

  gerarRelatorio(): string {
    return `
==== RELATÓRIO DA AERONAVE ====
Cliente: ${this.cliente}
Data de Entrega: ${this.dataEntrega.toDateString()}

${this.aeronave.exibirDetalhes()}

Peças:
${this.aeronave.pecas.map(p => `- ${p.nome} (${p.tipo}, ${p.status})`).join("\n")}

Etapas:
${this.aeronave.etapas.map(e => `- ${e.nome}: ${e.status}`).join("\n")}

Testes:
${this.aeronave.testes.map(t => `- ${t.tipo}: ${t.resultado}`).join("\n")}
`;
  }

  salvarArquivo(caminho: string): void {
    fs.writeFileSync(caminho, this.gerarRelatorio(), "utf-8");
  }
}
import { StatusEtapa } from "./enums";
import { Funcionario } from "./Funcionario";

export class Etapa {
  private funcionarios: Funcionario[] = [];
  constructor(
    public nome: string,
    public prazo: string,
    public status: StatusEtapa = StatusEtapa.PENDENTE
  ) {}

  iniciar(): void {
    if (this.status === StatusEtapa.PENDENTE) {
      this.status = StatusEtapa.ANDAMENTO;
    }
  }

  concluir(): void {
    if (this.status === StatusEtapa.ANDAMENTO) {
      this.status = StatusEtapa.CONCLUIDA;
    }
  }

  associarFuncionario(funcionario: Funcionario): void {
    if (!this.funcionarios.includes(funcionario)) {
      this.funcionarios.push(funcionario);
    }
  }

  listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }
}
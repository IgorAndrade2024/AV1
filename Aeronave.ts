import { TipoAeronave } from "./enums";
import { Peca } from "./Peca";
import { Etapa } from "./Etapa";
import { Teste } from "./Teste";

export class Aeronave {
  public pecas: Peca[] = [];
  public etapas: Etapa[] = [];
  public testes: Teste[] = [];

  constructor(
    public codigo: string,
    public modelo: string,
    public tipo: TipoAeronave,
    public capacidade: number,
    public alcance: number
  ) {}

  exibirDetalhes(): string {
    return `
    Código: ${this.codigo}
    Modelo: ${this.modelo}
    Tipo: ${this.tipo}
    Capacidade: ${this.capacidade}
    Alcance: ${this.alcance} km
    `;
  }
}
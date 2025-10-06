import { NivelPermissao } from "./enums";

export class Funcionario {
  constructor(
    public id: number,
    public nome: string,
    public telefone: string,
    public endereco: string,
    private usuario: string,
    private senha: string,
    public nivelPermissao: NivelPermissao
  ) {}

  autenticar(usuario: string, senha: string): boolean {
    return this.usuario === usuario && this.senha === senha;
  }
}
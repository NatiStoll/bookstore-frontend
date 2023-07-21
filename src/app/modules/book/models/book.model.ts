export interface Book{
    id: number;
    titulo: string;
    nomeAutor: string;
    categoria: Categoria;
    status?: StatusBook;
}
export enum StatusBook{
    READ, READING, NOT_READ
}
export interface StatusReadBook{
  value: string;
  viewValue: string;
}

export interface Categoria{
  id: number;
  nome?: string;
  descricao?: string;

}

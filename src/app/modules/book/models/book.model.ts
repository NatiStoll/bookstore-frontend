export interface Book{
    id: number;
    titulo: string;
    nomeAutor: string;
    // categoria: Categoria;
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

export interface BookRequest{
    id: number;
    titulo: string;
    nomeAutor: string;
    categoria_id: number;
    status?: StatusBook;
}

// export interface CategoryNumber{
//     id: number;
//     category: string;
   
// }

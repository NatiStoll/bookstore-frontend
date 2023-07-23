export interface Book{
    id: string;
    user_id: string;
    category_id: string;
    title: string;
    author: string;
    status: string;
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

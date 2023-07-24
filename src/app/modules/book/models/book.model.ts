export interface Book{
    id: string;
    user_id: string;
    category_id: string;
    title: string;
    author: string;
    status: string;
}
export enum StatusBook{
    READ = "Read",
    READING = "Reading",
    NOT_READ = "Not Read"
}
export interface StatusReadBook{
  value: string;
  viewValue: string;
}

export interface Category{
  id: number;
  name?: string;
  description?: string;
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

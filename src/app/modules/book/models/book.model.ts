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
  id: string;
  name: string;
  description: string;
}




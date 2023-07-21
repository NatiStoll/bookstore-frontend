export interface Book{
    title: string;
    author: string;
    category: string;
    status: StatusBook;
}
export enum StatusBook{
    READ, READING, NOT_READ
}
export interface StatusReadBook{
  value: string;
  viewValue: string;
}
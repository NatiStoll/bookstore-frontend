export interface User{
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}

export enum Role{
    ADMIN, USER
}
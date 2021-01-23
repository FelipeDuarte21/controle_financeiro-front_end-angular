export interface User{
    id: number,
    name: string,
    email: string,
    types: Array<number>
}

export interface UserToken{
    id: number,
    name: string,
    email: string,
    types: Array<string>
}
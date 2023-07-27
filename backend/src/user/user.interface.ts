export interface IUser {
    _id?: string,
    username: string,
    password: string,
    profileImage: string
}

export interface AuthUser {
    username: string,
    password: string,
}
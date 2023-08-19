export interface IUser {
    _id?: string,
    username: string,
    password: string,
    profileImage: string
    role: string
}

export interface AuthUser {
    username: string,
    password: string,
}
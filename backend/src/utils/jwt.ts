import jwt from 'jsonwebtoken'

const JWT_SECRET = 'VERY_SECRET_JWT_TOKEN'

interface UserData {
    username: string,
    password: string,
    profileImage: string
}

const generateJwt = (data: UserData): string => {
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' })
    return token
}

export default {
    generateJwt
}
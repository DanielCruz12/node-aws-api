import { sign } from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || 'apisecret'

const generateToken = (id: string) => {
    const jwt = sign({ id }, JWT_SECRET,
        { expiresIn: '1h' })
    return jwt
}
const verifyToken = () => {
    
}

export { generateToken, verifyToken }
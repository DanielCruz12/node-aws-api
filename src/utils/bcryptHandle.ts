import { compare, hash } from 'bcrypt'

const encrypt = async (password: string) => {
    if (!password) return
    const passwordHash = await hash(password, 8);
    return passwordHash;
}

const verified = async (password: string, passwordHashed: string) => {
    const isCorrectPass = compare(password, passwordHashed)
    return isCorrectPass
}

export { encrypt, verified }
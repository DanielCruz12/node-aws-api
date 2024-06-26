import { Request, Response } from "express";
import { loginService, registerService } from "../services/authService";
import { handleHttp } from "../utils/errorHandle";

const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body
    try {
        const newUser = await registerService({ name, email, password })
        res.status(200).json(newUser)
    } catch (error) {
        handleHttp(res, error)
    }
}

const login = async (req: Request, res: Response) => {
    const data = req.body
    try {
        const user = await loginService(data)
        res.status(200).json(user)
    } catch (error) {
        handleHttp(res, error)
    }
}


export { login, register }
import { Response, Request, Router } from "express";

const router = Router()
router.get('/items', (req: Request, res: Response) => {
    res.send({ data: "hello" })
})

export { router }
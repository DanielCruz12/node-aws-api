/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";

export const handleHttp = (res: Response, error: any) => {
    res.status(404)
    res.send({ error })
}


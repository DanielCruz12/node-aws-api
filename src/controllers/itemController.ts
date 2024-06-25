import { Request, Response } from "express"
import { handleHttp } from "../utils/errorHandle"
import { findAllItems, findItem, updateOneItem, create } from "../services/itemService"

export const getItems = async (req: Request, res: Response) => {
    try {
        await findAllItems()
        res.status(200).json({ data: { message: "hi" } })
    } catch (error) {
        handleHttp(res, error)
    }
}

export const createItem = async (req: Request, res: Response) => {
    try {
        await create()
        res.status(200).json({ data: { message: "hi" } })
    } catch (error) {
        handleHttp(res, error)
    }
}

export const getItem = async (req: Request, res: Response) => {
    try {
        await findItem()
        res.status(200).json({ data: { message: "hi" } })
    } catch (error) {
        handleHttp(res, error)
    }
}

export const updateItem = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await updateOneItem(id)
    } catch (error) {
        handleHttp(res, error)
    }
}

export const deleteItemById = (req: Request, res: Response) => {
    const { id } = req.params

    try {
        console.log(id)
        res.status(200).json({ data: { message: "hi" } })
    } catch (error) {
        handleHttp(res, error)
    }

}
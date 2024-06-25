import { Request, Response } from "express"
import { handleHttp } from "../utils/errorHandle"
import { findAllItems, findItem, updateOneItem, create, deleteItem } from "../services/itemService"

export const getItems = async (req: Request, res: Response) => {
    try {
        const items = await findAllItems()
        res.status(200).json(items)
    } catch (error) {
        handleHttp(res, error)
    }
}

export const createItem = async ({ body }: Request, res: Response) => {
    try {
        const itemCreated = await create(body)
        res.status(200).json(itemCreated)
    } catch (error) {
        handleHttp(res, error)
    }
}

export const getItem = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const itemFound = await findItem(id)
        res.status(200).json(itemFound)
    } catch (error) {
        handleHttp(res, error)
    }
}

export const updateItem = async (req: Request, res: Response) => {
    const { id } = req.params
    const data = req.body
    try {
        const itemUpdated = await updateOneItem(data, id)
        res.status(200).json(itemUpdated)

    } catch (error) {
        handleHttp(res, error)
    }
}

export const deleteItemById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const itemDeleted = await deleteItem(id)
        res.status(200).json(itemDeleted)
    } catch (error) {
        handleHttp(res, error)
    }

}
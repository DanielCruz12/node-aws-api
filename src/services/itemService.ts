import { Item } from "../interfaces/item"
import itemModel from "../models/item"

export const findAllItems = async () => {
    const items = await itemModel.find()
    return items
}

export const create = async (item: Item) => {
    const itemCreated = await itemModel.create(item)
    return itemCreated
}

export const findItem = async (id: string) => {
    const itemFound = itemModel.findById({ _id: id })
    return itemFound
}

export const updateOneItem = async (data: Item, id: string) => {

    const itemUpdated = itemModel.findOneAndUpdate({ _id: id }, data)
    return itemUpdated
}

export const deleteItem = (id: string) => {
    const itemDeleted = itemModel.findOneAndDelete({ _id: id })
    return itemDeleted
}
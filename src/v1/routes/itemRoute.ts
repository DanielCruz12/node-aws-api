import { Router } from "express";
import { getItem, getItems, createItem, updateItem, deleteItemById } from "../../controllers/itemController";

const itemRoutes = Router()
itemRoutes.get('/items', getItems)
itemRoutes.post('/items', createItem)
itemRoutes.get('/:id', getItem)
itemRoutes.put('/:id', updateItem)
itemRoutes.delete('/:id', deleteItemById)

export { itemRoutes }
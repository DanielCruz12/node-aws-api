import { Router } from "express";
import { getItem, getItems, createItem, updateItem, deleteItemById } from "../../controllers/itemController";

const router = Router()
router.get('/items', getItems)
router.post('/items', createItem)
router.get('/:id', getItem)
router.put('/:id', updateItem)
router.delete('/:id', deleteItemById)

export { router }
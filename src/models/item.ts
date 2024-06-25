import { Schema, model } from "mongoose";
import { Item } from "../interfaces/item";

const itemSchema = new Schema<Item>({
    color: { type: String, required: true },
    name: { type: String, required: true },
}, { timestamps: true, versionKey: false })

const itemModel = model('items', itemSchema)
export default itemModel
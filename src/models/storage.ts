import { Schema, model } from "mongoose";
import { Storage } from "../interfaces/storage";

const storageSchema = new Schema<Storage>({

    fileName: { type: String},
    path: { type: String},
    idUser: { type: String},
}, { timestamps: true, versionKey: false })

const storageModel = model('storage', storageSchema)
export default storageModel
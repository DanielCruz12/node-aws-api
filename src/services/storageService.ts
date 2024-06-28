import { Storage } from "../interfaces/storage"
import storageModel from "../models/storage"

const getFile = async ({ fileName, path, idUser }: Storage) => {
    const file = await storageModel.create({ fileName, path, idUser })
    return file
}
export { getFile }
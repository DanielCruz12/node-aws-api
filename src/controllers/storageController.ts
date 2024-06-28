/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import { getFile } from "../services/storageService";
import { RequestExt, Storage } from "../interfaces/storage";

const getFileController = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;

        if (!file) {
            console.error("File is undefined");
            return res.status(400).json({ error: 'File is required' });
        }
        if (!user) {
            console.error("User is undefined");
            return res.status(400).json({ error: 'User is required' });
        }

        const dataToRegister: Storage = {
            fileName: file.filename,
            idUser: user.id,
            path: file.path,
        };

        const response = await getFile(dataToRegister);
        res.status(200).json({ "file": response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export { getFileController };

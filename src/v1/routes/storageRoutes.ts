import { Router } from "express";
import { getFileController } from "../../controllers/storageController";
import multerMiddleware from "../../middlewares/file";
import { checkJwt } from "../../middlewares/session";

const router = Router()
router.post('/', checkJwt, multerMiddleware.single("myfile"), getFileController)

export { router as storageRoutes }
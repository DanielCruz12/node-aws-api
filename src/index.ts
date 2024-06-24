import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { router } from "./v1/routes/itemRoute";
const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

app.use(router)
app.listen(PORT, () => { console.log(`Running on port ${PORT}`) })
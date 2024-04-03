import express, { Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"
import mongose from "mongoose"

import userRoutes from "./routes/users"

mongose.connect(process.env.MONGODB_CONNECTION_STRING as string)

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/api/v1/users", userRoutes)

app.listen(7000, () => {
    console.log("Server running on localhost:7000")
})
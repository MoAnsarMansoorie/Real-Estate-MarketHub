import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"
import userRouter from "./routes/user.route.js"

dotenv.config()

const app = express()

connectDb()

app.use("/api/v1/user", userRouter)

app.listen(8080, (req, res) => {
    console.log(`Server is started at http://localhost:8080`)
})
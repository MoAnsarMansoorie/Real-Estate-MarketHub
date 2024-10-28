import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config()

connectDb()

const app = express()

app.use(express.json())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/auth", authRouter)

app.listen(8080, (req, res) => {
    console.log(`Server is started at http://localhost:8080`)
})
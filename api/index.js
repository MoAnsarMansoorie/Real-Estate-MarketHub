import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"

dotenv.config()

const app = express()

connectDb()

app.get("/test", (req, res) => {
    return res.status(200).send("hello test server")
})

app.listen(8080, (req, res) => {
    console.log(`Server is started at http://localhost:8080`)
})
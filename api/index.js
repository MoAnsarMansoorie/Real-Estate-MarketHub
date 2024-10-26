import express from "express"

const app = express()

app.get("/", (req, res) => {
    return res.status(200).json({
        succeess: true,
        message: "Hello Server"
    })
})

app.listen(3000, (req, res) => {
    console.log(`Server is started at http://localhost:3000`)
})
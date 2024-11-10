import express from "express"
import { testController, updateUserController } from "../controllers/user.controller.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.get("/test", testController)
router.post("/update/:id", verifyToken, updateUserController)

export default router
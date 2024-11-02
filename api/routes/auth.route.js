import express from "express"
import { googleAuthController, signinController, signupController } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/signup", signupController)
router.post("/signin", signinController)
router.post("/google", googleAuthController)

export default router
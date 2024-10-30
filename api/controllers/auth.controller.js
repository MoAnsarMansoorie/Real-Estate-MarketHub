import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"

export const signupController = async (req, res) => {
    // console.log(req.body)
    try {
        const { username, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save()
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            newUser
        })

    } catch (error) {
        next(error);
    }
}
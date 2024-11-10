import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from "bcryptjs"

export const testController = (req, res) => {
    return res.status(200).send("hello test server || api routes is working")
}

export const updateUserController = async (req, res, next) => {
    if(req.user.id !== req.params.id) return next(errorHandler(401, "You can only update your account"))
    try {
        if(req.body.password) {
            req.body.password = await bcryptjs.hash(req.body.password, 10)
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar
            }
        }, {new: true})

        return res.status(201).json({
            success: true,
            message: "User updated successfully",
            updatedUser
        })
        
    } catch (error) {
        next(error)
    }
}
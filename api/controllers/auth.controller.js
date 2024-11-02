import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const signupController = async (req, res, next) => {
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

export const signinController = async (req, res, next) => {
    const {email, password} = req.body
    try {        
        const user = await User.findOne({email})
        if(!user) return next(errorHandler(404, "Message not found"))
        
        const validpassword = await bcrypt.compare(password, user.password)
        if(!validpassword) return next(errorHandler(401, "Invalid credentials"))

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "2d"})
        // const { password: pass, ...rest } = validUser._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({
            success: true,
            message: "Sign IN successfully",
            user
        })
        
    } catch (error) {
        next(error)
    }
}

export const googleAuthController = async (req, res, next) => {
    try {
        const user = await User.findOne({email: rreq.body.email})
        if(user){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "2d"})
            res.cookie("access_token", token, {httpOnly:true}).status(200).json(user)
        } else {
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedPassword = await bcrypt.hash(generatedPassword, 10)

            const newUser = new User({username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) , email: req.body.email, password: hashedPassword, avatar: req.body.photo})
             
            await newUser.save()
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "2d"})
            res.cookie("access_token", token, {httpOnly: true}).status(200).json(newUser)
        }
        
    } catch (error) {
        next(error)
    }
}
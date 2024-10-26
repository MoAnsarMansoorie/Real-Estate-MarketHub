import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected succefully")
        
    } catch (err) {
        console.log("Mongodb connection error",err)
                
    }
}

export default connectDb
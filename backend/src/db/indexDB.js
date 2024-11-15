import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`Database connection successful. HOST : ${mongoose.connection.host}`);
        
    } catch (error) {
        console.log("error in db connection : ", error)
        process.exit(1)
    }
}

export default connectDB
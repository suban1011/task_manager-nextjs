import mongoose from "mongoose";
import colors from 'colors'
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'nextapp1'
        })
        console.log(`Connected to MONGODB`.bgGreen.white)
    } catch (error) {
        console.log("failed to connect")
    }


}
export default connectDB;
import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if (!process.env.MONGODB_URI) return console.log("No MongoDB URI");

    if (isConnected) return console.log('=> Using existing database connection');

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log('=> Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
    
}
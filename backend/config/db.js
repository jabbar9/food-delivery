import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://abdul:9420081800@cluster0.gt2ltfa.mongodb.net/Food-Delievery').then(()=>console.log("DB Connected"));
}
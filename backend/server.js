import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import ordeRouter from "./routes/orderRoute.js"

// app config
const app = express() //Initializing app
const port = 4000 //defining port no

//middleware
app.use(express.json()) //request from frontend to backend express.json will pe parsed
app.use(cors())  //can access backend from any frontend

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",ordeRouter)

app.get("/",(req,res)=> {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
})

//mongodb+srv://abdul:9420081800@cluster0.gt2ltfa.mongodb.net/?
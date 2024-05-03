import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrders, placeOrder, updateStatus, userOrders, verifyOrder } from '../controllers/orderController.js';

const ordeRouter = express.Router();

ordeRouter.post("/place",authMiddleware,placeOrder);
ordeRouter.post("/verify",verifyOrder)
ordeRouter.post("/userorders", authMiddleware, userOrders)
ordeRouter.get('/list',listOrders)
ordeRouter.post("/status",updateStatus)

export default ordeRouter;
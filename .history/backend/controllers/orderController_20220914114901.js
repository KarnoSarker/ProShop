import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc  Fetch all products
// @route GET /api/products
// @access Public

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems, shippingAddress,
    paymentMethod, itemsPrice, taxPrice, shippingPrice,
    totalPrice } = req.body
  }
});



export { getProductById, getProducts };

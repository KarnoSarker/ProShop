import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc  Create new order
// @route POST /api/orders
// @access Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice,
    totalPrice } = req.body
  }
  if(orderItems && orderItems.length === 0) {
    res.status(400)
  } else {

  }
});



export {  };

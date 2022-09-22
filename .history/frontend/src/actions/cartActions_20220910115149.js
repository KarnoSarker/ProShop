import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    const item = {
      product: data._id,
      name: data.name,
      qty,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
    };
    // DISPATCH AND SAVE TO LOCAL STORAGE
    dispatch({ type: CART_ADD_ITEM, payload: item });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  try {
    // DISPATCH AND REMOVE FROM STORAGE
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

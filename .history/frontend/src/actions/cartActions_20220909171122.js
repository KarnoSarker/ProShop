import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (id, qty) => async (dispatch, getState) => {
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

export default addToCart;

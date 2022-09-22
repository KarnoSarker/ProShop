import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../components/Message';
import addToCart from '../actions/cartActions';
import { Helmet } from 'react-helmet';

const CartScreen = ({ match, location, history }) => {
  // STATES
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // USE EFFECT
  useEffect(() => {
    if (productId) dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  // HANDLERS

  return <di>Cart</di>;
};

export default CartScreen;

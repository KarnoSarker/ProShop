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
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  // USE EFFECT
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    console.log('remove');
  };

  // HANDLERS

  return (
    <Row>
      <Col md={8}>
        <h1>Sopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty,
            <Link to='/'> Go back to products </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'></ListGroup>
        )}
      </Col>
      <Col md={2}></Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default CartScreen;

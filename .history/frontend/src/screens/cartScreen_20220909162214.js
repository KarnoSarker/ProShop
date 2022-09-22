import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
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

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your Cart is Empty,
            <Link to='/'> Go back to products </Link>
          </Message>
        ) : (
          <ListGroup variant='flush'></ListGroup>
        )}
      </Col>
    </Row>
  );
};

export default CartScreen;

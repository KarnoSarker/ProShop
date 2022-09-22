import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form class='form-inline my-2 my-lg-0' onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        class='form-control mr-sm-2'
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        class='btn btn-outline-success my-2 my-sm-0'
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;

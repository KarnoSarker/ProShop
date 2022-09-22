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
    <>
      <Form class='form-inline my-2 my-lg-0' onSubmit={submitHandler}>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button
          type='submit'
          variant='outline-success'
          class='btn btn-outline-success my-2 my-sm-0'
        >
          Search
        </Button>
      </Form>

      <nav class='navbar navbar-light bg-light justify-content-between'>
        <a class='navbar-brand'>Navbar</a>
        <form class='form-inline'>
          <input
            class='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          ></input>
          <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default SearchBox;

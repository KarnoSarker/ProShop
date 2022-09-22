import React, { useState } from 'react';
import { Form, Button, Stack } from 'react-bootstrap';

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
    <Stack direction='horizontal' gap={5}>
      <Form id='search-input' onSubmit={submitHandler}>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search product...'
          className='me-auto'
        />
      </Form>
      <Button
        form='search-input'
        type='submit'
        variant='outline-success'
        className='p-2'
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchBox;

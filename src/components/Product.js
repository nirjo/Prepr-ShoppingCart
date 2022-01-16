import React from 'react';

import {
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
  Button,
} from 'react-bootstrap';

const Product = (props) => {
  const { product, onAdd } = props;
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <img className="small" src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
          <Button onClick={() => onAdd(product)}>Add To Cart</Button>
        </div>
      </Container>
    </Navbar>
  );
};
export default Product;

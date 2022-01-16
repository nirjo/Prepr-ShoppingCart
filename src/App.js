import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './pages/Cart';
import data from './data';
import { Container, Nav, Navbar } from 'react-bootstrap';

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <>
        <Navbar>
          <Container>
            <Header countCartItems={cartItems.length}></Header>
            <div className="row">
              <Main products={products} onAdd={onAdd}></Main>
              <Cart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></Cart>
            </div>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default App;

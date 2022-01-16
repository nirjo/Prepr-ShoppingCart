import React from 'react';
import Header from './components/Header';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Product from './components/Product';
import { BrowserRouter, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route>
        <Route path="/" exact>
          <Product />
        </Route>
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </BrowserRouter>
  );
};

export default Routes;

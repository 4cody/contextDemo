import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './classes/Products';
import Cart from './classes/Cart';
import Totals from './classes/Totals';
import StoreContext from './context/store-context';
import './App.css';

class AppPre extends Component {
  state = {
    products: [
      { id: 123, name: 'Keyboard', price: 32 },
      { id: 113, name: 'Chair', price: 40 },
      { id: 751, name: 'Monitor', price: 45 },
      { id: 942, name: 'Cam', price: 12 },
      { id: 157, name: 'Mic', price: 8 },
    ],
    cart: [],
  };

  addProductToCart = (product) => {
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    this.setState({ cart: updatedCart });
  };

  removeProductFromCart = (productId) => {
    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    this.setState({ cart: updatedCart });
  };

  render() {
    return (
      <StoreContext.Provider
        value={{
          products: this.state.products,
          cart: this.state.cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart,
        }}
      >
        <div className='App'>
          <header>
            <Totals />
          </header>
          <Switch>
            <Route path='/' exact component={Products} />
            <Route path='/Cart' exact component={Cart} />
          </Switch>
        </div>
      </StoreContext.Provider>
    );
  }
}

export default AppPre;

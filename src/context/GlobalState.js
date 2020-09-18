import React, { useReducer } from 'react';

import StoreContext from './store-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers';

const GlobalState = (props) => {
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const products = [
    { id: 123, name: 'Keyboard', price: 32 },
    { id: 113, name: 'Chair', price: 40 },
    { id: 751, name: 'Monitor', price: 45 },
    { id: 942, name: 'Cam', price: 12 },
    { id: 157, name: 'Mic', price: 8 },
  ];

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT, product });
  };

  const removeProductFromCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT, productId });
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalState;

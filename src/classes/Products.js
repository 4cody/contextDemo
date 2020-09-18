import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../context/store-context';

class Products extends Component {
  state = {};

  render() {
    return (
      <>
        <Link to='/cart' style={{ textDecoration: 'none', color: 'blue' }}>
          To Cart
        </Link>

        <StoreContext.Consumer>
          {(context) => (
            <div className='dashboard'>
              {context.products.map((item) => (
                <div className='listItem' key={item.id}>
                  <h3> {item.name}</h3>
                  <h3>{`$${item.price}`}</h3>
                  <button onClick={() => context.addProductToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          )}
        </StoreContext.Consumer>
      </>
    );
  }
}

export default Products;

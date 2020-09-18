import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../context/store-context';

class Cart extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <div>
        <Link to='/' style={{ textDecoration: 'none', color: 'blue' }}>
          To Products
        </Link>

        <div className='dashboard'>
          {this.context.cart.length <= 0 && <p>No Items in Cart</p>}

          <ul>
            {this.context.cart.map((item) => (
              <li className='listItem' key={item.id}>
                <h3>{`${item.name}(${item.quantity})`}</h3>
                <button
                  onClick={() => this.context.removeProductFromCart(item.id)}
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;

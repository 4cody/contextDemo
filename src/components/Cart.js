import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../context/store-context';

export const Cart = () => {
  const context = useContext(StoreContext);

  return (
    <>
      <Link to='/' style={{ textDecoration: 'none', color: 'blue' }}>
        To Products
      </Link>

      <div className='dashboard'>
        {context.cart.length <= 0 && <p>No Items in Cart</p>}

        <ul>
          {context.cart.map((item) => (
            <li className='listItem' key={item.id}>
              <h3>{`${item.name}(${item.quantity})`}</h3>
              <button onClick={() => context.removeProductFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

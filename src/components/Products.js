import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import StoreContext from '../context/store-context';

export const Products = () => {
  const context = useContext(StoreContext);

  return (
    <>
      <Link to='/cart' style={{ textDecoration: 'none', color: 'blue' }}>
        To Cart
      </Link>

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
    </>
  );
};

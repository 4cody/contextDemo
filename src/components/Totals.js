import React, { useContext } from 'react';

import StoreContext from '../context/store-context';
import storeContext from '../context/store-context';

export const Totals = () => {
  const context = useContext(storeContext);

  return (
    <>
      <div>
        Cost:{' $'}
        {context.cart.reduce((count, curItem) => {
          return count + curItem.price * curItem.quantity;
        }, 0)}
      </div>
      <div>
        Items:{' '}
        {context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      </div>
    </>
  );
};

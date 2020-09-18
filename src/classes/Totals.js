import React, { Component } from 'react';

import StoreContext from '../context/store-context';

class Totals extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(context) => (
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
        )}
      </StoreContext.Consumer>
    );
  }
}

export default Totals;

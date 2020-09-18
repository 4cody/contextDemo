import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { Totals } from './components/Totals';
import GlobalState from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalState>
      <div className='App'>
        <header>
          <Totals />
        </header>
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/Cart' exact component={Cart} />
        </Switch>
      </div>
    </GlobalState>
  );
}

export default App;

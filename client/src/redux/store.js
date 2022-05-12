import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialState } from './initialState';
import { reducer as productsReducer } from './productsRedux';
import { reducer as authReducer } from './authRedux';
import { reducer as cartReducer } from './cartRedux';
import { reducer as orderReducer } from './orderRedux';

// define reducers
const reducers = {
  products: productsReducer,
  user: authReducer,
  cart: cartReducer,
  orders: orderReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

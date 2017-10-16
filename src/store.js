import { createStore } from 'redux';
import reducer from './ducks/reducer';

export default createStore(reducer); // When this function is invoked, it returns the redux store that keeps track of the state tree of your application along with the reducers that were passed in.
// NOTE: If you have more than one reducer, use the function combineReducers from redux.


// REDUX PROMISE MIDDLEWARE
// import { createStore, applyMiddleware } from 'redux';
// import reduxPromiseMiddleware from 'redux-promise-middleware'; 
// import reducer from './ducks/reducer';

// export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
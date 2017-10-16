// import { getAllUsers } from '../services/userService';

const initialState = {
  users: [] 
}

const ADD_USER = 'ADD_USER';

// This is for redux-promise-middleware
// const GET_USERS = 'GET_USERS'
// const GET_USERS_PENDING = 'GET_USERS_PENDING';
// const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';

// The reducer function should always take in first the state, and second the action as parameters.
export default function reducer(state=initialState, action) {
  switch(action.type) {
    case ADD_USER:
      let { name, age } = action.payload;
      console.log(Object.assign({}, state, { users: [...state.users, { name, age }] }))
      return Object.assign({}, state, { users: [...state.users, { name, age }] });
    // // This is for redux-promise-middleware
    // case GET_USERS_PENDING: // This is fired after the GET_USERS action.type is passed
    //   return state;
    // case GET_USERS_FULFILLED: // This is fired once the promise is fulfilled
    //   return Object.assign({}, state, { users: [...state.users].concat(action.payload) })
    default:
      return state;
  }
}

// This is an action creator. All it does is return an action. 
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user
  }
}

// export function getUsers() {
//   return {
//     type: GET_USERS,
//     payload: getAllUsers() // the payload value should always be a promise. This is the function from the service that is returning a promise already.
//   }
// }

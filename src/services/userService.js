import axios from 'axios';

export function addNewUser(user) {
  return axios.post('http://localhost:3005/users', user)
    .then(response => response.data)
}

export function getAllUsers() {
  return axios.get('http://localhost:3005/users')
    .then(response => response.data)
}
import axios from 'axios';

import { SET_USERS, SET_MODAL, ADD_NEW_USER, DELETE_USER } from '../../constants/main';

const baseURL = 'https://eureca.herokuapp.com/users' || 'http://localhost:3001/users'

export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setModal = (payload) => ({ type: SET_MODAL, payload });
export const addUser = (payload) => ({ type: ADD_NEW_USER, payload });
export const deleteUser = (payload) => ({ type: DELETE_USER, payload });

export const fetchUsers = () => (dispatch) => {
  axios.get('http://localhost:3001/users').then(({ data }) => {
    dispatch(setUsers(data));
  }).catch((err) => console.error('Fetch users is failed', err));
}

export const addNewUser = (formData) => () => {
  axios.post('http://localhost:3001/users', formData);
}

export const removeUser = (userId) => () => {
  // console.log(userId)
  axios.delete(`http://localhost:3001/users/${userId}`)
}

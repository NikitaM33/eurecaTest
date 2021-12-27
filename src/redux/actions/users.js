import axios from 'axios';

import { SET_USERS, SET_MODAL, ADD_NEW_USER, DELETE_USER } from '../../constants/main';

const baseURL = 'https://eureca.herokuapp.com/users' || 'http://localhost:3001/users';

export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setModal = (payload) => ({ type: SET_MODAL, payload });
export const addUser = (payload) => ({ type: ADD_NEW_USER, payload });
export const deleteUser = (payload) => ({ type: DELETE_USER, payload });

export const fetchUsers = () => (dispatch) => {
  axios.get(baseURL).then(({ data }) => {
    dispatch(setUsers(data));
  }).catch((err) => console.error('Fetch users is failed', err));
}

export const addNewUser = (formData) => () => {
  axios.post(baseURL, formData);
}

export const removeUser = (userId) => () => {
  axios.delete(`${baseURL}/${userId}`)
}

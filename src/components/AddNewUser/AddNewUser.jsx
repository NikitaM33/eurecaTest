import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/actions/users';

function AddNewUser() {
  const dispatch = useDispatch();
  const addNewUser = () => {
    dispatch(setModal(true));
  }

  return (
    <div className="newUser">
      <h3>Пользователи</h3>
      <button onClick={addNewUser}>
        <span>&#10010;</span>
        Добавить
      </button>
    </div>
  )
}

export default AddNewUser;

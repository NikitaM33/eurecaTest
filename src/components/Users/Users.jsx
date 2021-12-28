import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers, removeUser } from '../../redux/actions/users';
import pen from '../../assets/img/Pencil.svg';
import trash from '../../assets/img/Trash.svg';
import Modal from '../common/Modal/Modal';

function Users() {
  const dispatch = useDispatch();
  const { items } = useSelector(({ users }) => users);
  const { isModalOpen } = useSelector(({ users }) => users);

  const deleteUser = (id) => {
    if (window.confirm('Удалить выбранного пользователя?')) {
      dispatch(removeUser(id));
    }
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [items]);

  return (
    <>
      <table className="users">
        <thead>
          <tr className="users__string">
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>E-mail</th>
            <th>Логин</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            items && items.map((user) => {
              return <tr key={user.id} className="users__string">
                <td>{user.surname}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.mail}</td>
                <td>{user.login}</td>
                <td className="users__editContainer">
                  <button className="users__edit">
                    <img src={pen} alt="Edit" />
                  </button>
                  <button className="users__remove" onClick={() => deleteUser(user.id)}>
                    <img src={trash} alt="Remove" />
                  </button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>

      <Modal
        isModal={isModalOpen}
      />
    </>
  )
}

export default Users;

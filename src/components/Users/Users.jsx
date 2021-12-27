import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../redux/actions/users';
import pen from '../../assets/img/Pencil.svg';
import trash from '../../assets/img/Trash.svg';
import Modal from '../common/Modal/Modal';

function Users({ users }) {
  const dispatch = useDispatch();
  const { items } = useSelector(({ users }) => users);
  const { isModalOpen } = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

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
            items && items.sort((a, b) => a.timeStamp - b.timeStamp).reverse().map((user) => {
              return <tr key={user.id} className="users__string">
                <td>{user.surname}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.mail}</td>
                <td>{user.login}</td>
                <td className="users__editContainer">
                  <div className="users__edit">
                    <img src={pen} alt="Edit" />
                  </div>
                  <div className="users__remove">
                    <img src={trash} alt="Remove" />
                  </div>
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

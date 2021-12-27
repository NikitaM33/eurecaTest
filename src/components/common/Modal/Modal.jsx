import React from 'react';
import { useDispatch } from 'react-redux';

import { setModal } from '../../../redux/actions/users';
import Form from '../Form/Form';

function Modal({ isModal }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setModal(false));
  }

  return (
    <>
      {
        isModal && <div className="modal">
          <div className="modal__content">
            <div className="modal__header">
              <span className="modal__text">Создание пользователя</span>
              <span className="modal__close" onClick={closeModal}>&#10006;</span>
            </div>

            <div className="modal__body">
              <Form />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal;

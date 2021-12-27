import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import { addNewUser } from '../../../redux/actions/users';

function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');

  const [nameError, setNameError] = useState('Имя не заполнено');
  const [surnameError, setSurnameError] = useState('Фамилия не заполнено');
  const [patronymicError, setPatronymicError] = useState('Отчество не заполнено');
  const [emailError, setEmailError] = useState('Email не заполнено');
  const [loginError, setLoginError] = useState('Логин не заполнено');

  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [patronymicDirty, setPatronymicDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [loginDirty, setLoginDirty] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'surname':
        setSurnameDirty(true)
        break;

      case 'userName':
        setNameDirty(true)
        break;

      case 'patronymic':
        setPatronymicDirty(true)
        break;

      case 'email':
        setEmailDirty(true)
        break;

      case 'login':
        setLoginDirty(true)
        break;
    }
  }

  const emailHandler = (e) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    setEmail(e.target.value);
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }

  const loginHandler = (e) => {
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setLoginError('Логин должен быть не меньше 3 и не больше 8 символов!')

      if (!e.target.value) {
        setLoginError('Логин не заполнено')
      }
    } else {
      setLoginError('')
      setLogin(e.target.value)
    }
  }

  const changeHandler = (e) => {
    switch (e.target.name) {
      case 'surname':
        if (e.target.value.length < 2) {
          setSurnameError('Фамилия должна быть не менее 2-х символов')

          if (!e.target.value) {
            setSurnameError('Фамилия не заполнено')
          }
        } else {
          setSurnameError('')
          setSurname(e.target.value)
        }
        break;

      case 'userName':
        if (e.target.value.length < 2) {
          setNameError('Имя должно быть не менее 2-х символов')

          if (!e.target.value) {
            setNameError('Имя не заполнено')
          }
        } else {
          setNameError('')
          setName(e.target.value)
        }
        break;

      case 'patronymic':
        if (e.target.value.length < 2) {
          setPatronymicError('Отчество должно быть не менее 2-х символов')

          if (!e.target.value) {
            setPatronymicError('Отчество не заполнено')
          }
        } else {
          setPatronymicError('')
          setPatronymic(e.target.value)
        }
        break;
    }
  }

  const sendFormData = () => {
    const formData = {
      surname,
      name,
      lastName: patronymic,
      mail: email,
      login,
      timeStamp: Date.now()
    }

    dispatch(addNewUser(formData));
  }

  return (
    <>
      <form className="modal__form form">
        <label>Фамилия</label>
        {surnameDirty && <span className="form__error">{surnameError}</span>}
        <input onChange={changeHandler} onBlur={blurHandler} type="text" placeholder="Введите фамилию" name="surname" />

        <label>Имя</label>
        {nameDirty && <span className="form__error">{nameError}</span>}
        <input onChange={changeHandler} onBlur={blurHandler} type="text" placeholder="Введите имя" name="userName" />

        <label>Отчество</label>
        {patronymicDirty && <span className="form__error">{patronymicError}</span>}
        <input onChange={changeHandler} onBlur={blurHandler} type="text" placeholder="Введите отчество" name="patronymic" />

        <label>E-mail</label>
        {emailDirty && <span className="form__error">{emailError}</span>}
        <input onChange={emailHandler} onBlur={blurHandler} type="text" placeholder="Введите электронную почту" name="email" />

        <label>Логин</label>
        {loginDirty && <span className="form__error">{loginError}</span>}
        <input onChange={loginHandler} onBlur={blurHandler} type="text" placeholder="Введите логин" name="login" />
      </form>

      <div className="modal__footer footer">
        {
          (surname && name && patronymic && email && login) ? <button className={classnames('footer__button', {
            'active': surname && name && patronymic && email && login
          })} onClick={sendFormData}>Создать</button>
          : <button className={classnames('footer__button', {
            'active': surname && name && patronymic && email && login
          })} disabled onClick={sendFormData}>Создать</button>
        }

      </div>
    </>
  )
}

export default Form;

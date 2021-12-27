import { SET_USERS, SET_MODAL } from '../../constants/main';

const initialState = {
  items: [],
  isModalOpen: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:

      return {
        ...state,
        items: action.payload
      }

    case SET_MODAL:

      return {
        ...state,
        isModalOpen: action.payload
      }

    default:
      return state
  }
}

export default users;

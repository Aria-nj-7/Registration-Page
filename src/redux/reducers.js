import {
  REGISTER_USER,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './constance';

const initialState = {
  user: null,
  isRegistered: false,
  isSubmitting: false,
  error: null,
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
        isSubmitting: true,
        error: null,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;

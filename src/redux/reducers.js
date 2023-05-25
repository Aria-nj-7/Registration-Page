import {
  REGISTER_USER,
  CONFIRM_REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './constance';

const initialState = {
  user: null,
  isRegistered: false,
  isConfirmed: false,
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
        isConfirmed: false,
      };
    case CONFIRM_REGISTRATION:
      return {
        ...state,
        isConfirmed: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        error: null,
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
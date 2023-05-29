import axios from 'axios';
import {
  REGISTER_USER,
  CONFIRM_REGISTRATION,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './constance';

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const confirmRegistration = () => ({
  type: CONFIRM_REGISTRATION,
});

export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

export const registrationFailure = (error) => ({
  type: REGISTRATION_FAILURE,
  payload: error,
});

export const submitRegistration = (user) => {
  return async (dispatch) => {
    try {
      dispatch(registerUser(user));

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const response = await axios.post(
        'https://cd.amwajco.net/assignment.php',
        user
      );

      if (response.status === 500) {
        dispatch(registrationSuccess());
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      dispatch(registrationFailure(error.message));
    }
  };
};
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmRegistration } from '../redux/actions';
import { differenceInYears } from 'date-fns';
import './RegistrationForm.css';

const RegistrationConfirmation = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  const handleConfirm = () => {
    dispatch(confirmRegistration());
  };

  return (
    <div className='container'>
      <table>
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{user.family}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              {user.birthday && differenceInYears(new Date(), new Date(user.birthday))}
            </td>
          </tr>
        </tbody>
      </table>

      <button className='confirm-button' onClick={handleConfirm}>
        Confirm
      </button>
      <button className='confirm-button' onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  );
};

export default RegistrationConfirmation;

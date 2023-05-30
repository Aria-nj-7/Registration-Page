import React from 'react';
import './RegistrationForm.css';
import { differenceInYears } from 'date-fns';

const ConfirmationPage = ({ data, onConfirmation, onGoBack }) => {
  document.getElementById('title-h2').style.display = 'none' ;
  return (
    <div className='confirmation-container'>
      <h2 className='confirmation-title'>Confirmation Page</h2>
      <table>
        <tbody>
          <tr>
            <td>Name :</td>
            <td>{data.name + ' ' + data.family}</td>
          </tr>
          <tr>
            <td>Gender :</td>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <td>Birthday :</td>
            <td>{data.birthday}</td>
          </tr>
          <tr>
            <td>Age :</td>
            <td>{differenceInYears(new Date(), new Date(data.birthday))}</td>
          </tr>

          <tr>
            <td>ID Image :</td>
            <td>
              <img src={data.idImage} alt='ID Card' className='id-card' />
            </td>
          </tr>
        </tbody>
      </table>
      <p>Please confirm the information above.</p>
      <button onClick={onConfirmation} className='confirm-button'>
        Confirm
      </button>
      <button onClick={onGoBack} className='go-back-button'>
        Go Back
      </button>
    </div>
  );
};

export default ConfirmationPage;

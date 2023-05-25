import React, { useState } from 'react';
import './RegistrationForm.css';
import { differenceInYears } from 'date-fns';
import { useDispatch } from 'react-redux';
import { submitRegistration } from '../redux/actions';

const ConfirmationPage = ({ data, onConfirmation, onGoBack }) => {
  document.getElementById('title-h2').style.display = 'none';
  return (
    <div>
      <h2>Confirmation Page</h2>
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
            <td>Date of Birth :</td>
            <td>{data.birthday}</td>
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

const validateAge = (birthday) => {
  const age = differenceInYears(new Date(), new Date(birthday));
  return age >= 18;
};

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [idImage, setIdImage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !family || !gender || !birthday || !idImage) {
      setError('Please fill in all fields');
      return;
    }
    if (!validateAge(birthday)) {
      setError('You must be at least 18 years old');
      return;
    }

    setFormData({
      name,
      family,
      gender,
      birthday,
      idImage
    });

    setIsSubmitted(true);
  };
  const dispatch = useDispatch();

  const handleConfirmation = () => {
    dispatch(submitRegistration(formData));
    setFormData(null);
    setIsSubmitted(false);
  };

  const handleGoBack = () => {
    setFormData(null);
    setIsSubmitted(false);
  };

  return (
    <div className='container'>
      <h2 id='title-h2'>Registration Form</h2>
      {!isSubmitted ? (
        <form className='form-group' onSubmit={handleSubmit}>
          <label>
            First Name :
          </label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} required />
          <label>
            Last Name :
          </label>
          <input type='text' value={family} onChange={(e) => setFamily(e.target.value)} required />
          <label>
            Gender :
          </label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: "95%" }} required>
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>

          <label>
            Birthday :
          </label>
          <input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} required />

          <label>
            ID Image :
          </label>
          <input type='file' accept='.jpg' onChange={(e) => setIdImage(URL.createObjectURL(e.target.files[0]))} required />

          {error && <p className='error'>{error}</p>}
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </form>
      ) : (
        <ConfirmationPage
          data={formData}
          onConfirmation={handleConfirmation}
          onGoBack={handleGoBack}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
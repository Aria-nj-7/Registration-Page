import React, { useState } from 'react';
import './RegistrationForm.css';
import { differenceInYears } from 'date-fns';
import { useDispatch } from 'react-redux';
import { submitRegistration } from '../redux/actions';
import ConfirmationPage from './ConfirmationPage';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [family, setFamily] = useState('');
  const [gender, setGender] = useState('');
  const [birthday, setBirthday] = useState('');
  const [idImage, setIdImage] = useState('');
  const [error, setError] = useState('');
  const [isConfirmationPageVisible, setConfirmationPageVisible] = useState(false);

  const dispatch = useDispatch();

  const validateAge = (birthday) => {
    return differenceInYears(
      new Date(), new Date(birthday)) >= 18;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !family || !gender || !birthday || !idImage) {
      setError('* Please fill in all fields');
      return;
    }
    if (!validateAge(birthday)) {
      setError('* You must be at least 18 years old');
      return;
    }

    const imageFile = e.target.querySelector('input[type="file"]').files[0];
    if (imageFile && imageFile.size > 1024 * 1024) {
      setError('Image size should be less than 1MB');
      return;
    }

    setConfirmationPageVisible(true);
  };

  const handleConfirm = () => {
    const formData = {
      name,
      family,
      gender,
      birthday,
      idImage
    };

    dispatch(submitRegistration(formData));
    setConfirmationPageVisible(false);
  };

  const handleGoBack = () => {
    setConfirmationPageVisible(false);
  };

  return (
    <div className='container'>
      <h2 id='title-h2'>Registration Form</h2>
      {!isConfirmationPageVisible && (
        <form className='form-group' onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <label>Last Name:</label>
          <input type='text' value={family} onChange={(e) => setFamily(e.target.value)} />
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ width: '95%' }}>
            <option value=''>Select</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
          <label>Birthday:</label>
          <input type='date' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
          <label>ID Image:</label>
          <input type='file' accept='.jpg' onChange={(e) => setIdImage(URL.createObjectURL(e.target.files[0]))} />
          {error && <p className='error'>{error}</p>}
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </form>
      )}
      {isConfirmationPageVisible && (
        <ConfirmationPage
          data={{
            name: name,
            family: family,
            gender: gender,
            birthday: birthday,
            idImage: idImage
          }}
          onConfirmation={handleConfirm}
          onGoBack={handleGoBack}
        />
      )}
    </div>
  );
};

export default RegistrationForm;

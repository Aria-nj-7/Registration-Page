import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationForm from './components/RegistrationForm';
import RegistrationSuccess from './components/RegistrationSuccess';

const App = () => {
  const { isRegistered, isSubmitting, error } = useSelector((state) => state);

  return (
    <div>
      {!isRegistered && <RegistrationForm />}
      {isSubmitting && <p>Submitting registration...</p>}
      {!isSubmitting && error && <p>Registration failed : {error}</p>}
      {isRegistered && !isSubmitting && !error && <RegistrationSuccess />}
    </div>
  );
};

export default App;

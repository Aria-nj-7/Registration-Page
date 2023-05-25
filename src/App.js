import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationForm from './components/RegistrationForm';
import RegistrationConfirmation from './components/RegistrationConfirmation';
import RegistrationSuccess from './components/RegistrationSuccess';

const App = () => {
  const { isRegistered, isConfirmed, isSubmitting, error } = useSelector(
    (state) => state
  );

  return (
    <div>
      {!isRegistered && !isConfirmed && <RegistrationForm />}
      {isRegistered && !isConfirmed && <RegistrationConfirmation />}
      {isConfirmed && <RegistrationSuccess />}
      {isSubmitting && <p>Submitting registration...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default App;

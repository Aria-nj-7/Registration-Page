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
      {error && <p>Error: {error}</p>}
      {isRegistered && <RegistrationSuccess />}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Formulario from '../componentes/formulario';
import Login from '../componentes/Login';

const App = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <Formulario onSwitchForm={handleSwitchForm} />
      ) : (
        <Login onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default App;
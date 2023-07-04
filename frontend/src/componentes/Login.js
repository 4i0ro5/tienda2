import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onSwitchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/login",
        {
          email,
          password
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/><br/>

        <input type="submit" value="Iniciar Sesión" />
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <a href="#" onClick={onSwitchForm}>
          Regístrate aquí
        </a>
        .
      </p>
    </div>
  );
};

export default Login;

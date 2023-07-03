import { useState } from 'react';
import axios from 'axios';

const Login = ({ onSwitchForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://tienda2-production-f793.up.railway.app/api/login',
        {
          username,
          pass: password
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Formulario de Inicio de Sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        <input type="submit" value="Ingresar" />
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

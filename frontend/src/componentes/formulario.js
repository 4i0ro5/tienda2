import React, { useState } from 'react';
import axios from 'axios';

const Formulario = ({ onSwitchForm }) => {
  const [username, setUsername] = useState('');
  const [nam, setNam] = useState('');
  const [ln, setLn] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const url = "https://tienda-landing.onrender.com";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
      .post(
        url + "/registro",
        {
          username,
          nam,
          ln,
          phone,
          email,
          pass
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
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

        <label htmlFor="nam">Nombre:</label>
        <input
          type="text"
          id="nam"
          name="nam"
          value={nam}
          onChange={(e) => setNam(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="ln">Apellido:</label>
        <input
          type="text"
          id="ln"
          name="ln"
          value={ln}
          onChange={(e) => setLn(e.target.value)}
        /><br/><br/>

        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/><br/>

        <label htmlFor="pass">Contraseña:</label>
        <input
          type="password"
          id="pass"
          name="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          required
        /><br/><br/>

        <input type="submit" value="Registrarse" />
      </form>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <a href="#" onClick={onSwitchForm}>
          Inicia sesión aquí
        </a>
        .
      </p>
    </div>
  );
};

export default Formulario;

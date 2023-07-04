// backend/src/controllers/loginController.js
import { pool } from '../db.js';

export const login = async (req, res) => {
  const { username, pass } = req.body;
  try {
    const { rows } = await pool.query('SELECT * FROM registro WHERE username = $1 AND pass = $2', [username, pass]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: 'Credenciales inválidas',
      });
    res.json({
      message: 'Inicio de sesión exitoso',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

import { pool } from '../db.js';

export const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM registro');
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM registro WHERE id = $1', [id]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: 'Usuario no registrado',
      });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const postUser = async (req, res) => {
  const { username, nam, ln, phone, email, pass } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO registro(username, nam, ln, phone, email, pass) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [username, nam, ln, phone, email, pass]
    );
    const newUser = rows[0];
    res.send({
      id: newUser.id,
      username: newUser.username,
      nam: newUser.nam,
      ln: newUser.ln,
      phone: newUser.phone,
      email: newUser.email,
      pass: newUser.pass,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const patchUser = async (req, res) => {
  const { id } = req.params;
  const { username, nam, ln, phone, email, pass } = req.body;
  try {
    const { rowCount } = await pool.query(
      'UPDATE registro SET username = COALESCE($1, username), nam = COALESCE($2, nam), ln = COALESCE($3, ln), phone = COALESCE($4, phone), email = COALESCE($5, email), pass = COALESCE($6, pass) WHERE id = $7',
      [username, nam, ln, phone, email, pass, id]
    );

    if (rowCount === 0)
      return res.status(404).json({
        message: 'Usuario no registrado',
      });

    const { rows } = await pool.query('SELECT * FROM registro WHERE id = $1', [id]);
    const updatedUser = rows[0];

    res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM registro WHERE id = $1', [req.params.id]);
    console.log(result);
    res.send('Usuario eliminado');
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

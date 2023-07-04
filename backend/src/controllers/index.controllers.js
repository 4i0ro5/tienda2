import { query } from '../db.js';

export const indexPrin = async (req, res) => {
  try {
    const { rows } = await query('SELECT $1::text AS result', ['Pong']);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

export const indexPong = async (req, res) => {
  try {
    const { rows } = await query('SELECT $1::text AS result', ['Pong']);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
    });
  }
};

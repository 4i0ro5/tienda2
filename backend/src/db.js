import dotenv from 'dotenv';
import pkg from 'pg';
//import dbconfig from './config.js'
const { Pool } = pkg;

dotenv.config();

const pool = new Pool({
  conectionString: 'postgres://root:bXOBxhG1l7SXnYojWCVPao6czxQBX0e1@dpg-cihjq3l9aq012euuojtg-a.oregon-postgres.render.com/mitienda_lwuc'
});

const query = async (text, params) => {
  try {
    const result = await pool.query(text, params);
    return result.rows;
  } catch (error) {
    throw new Error(`Error executing query: ${error}`);
  }
};

export {query};

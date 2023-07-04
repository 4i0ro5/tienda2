import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import registroRoutes from './routes/registro.routes.js';
import loginRoutes from './routes/login.routes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/registro', registroRoutes);
app.use('/login', loginRoutes);

app.use((error, req, res, next) => {
  console.error('Error en la solicitud:', error);
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});

export default app;

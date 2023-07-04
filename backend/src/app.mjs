  import express from 'express';
  import bodyParser from 'body-parser';
  import cors from 'cors';
  import morgan from 'morgan';
  import path,{dirname} from  'path';
  import { fileURLToPath } from 'url';

  import registroRoutes from './routes/registro.routes.js';
  import loginRoutes from './routes/login.routes.js';

  const app = express();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(morgan('dev'));

  app.use('/registro', registroRoutes);
  app.use('/login', loginRoutes);
  app.use('/ping', loginRoutes);


  app.use(express.static(path.join(__dirname, '.../frontend/public')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '.../frontend/public/index.html'));
  });

  app.use((error, req, res, next) => {
    console.error('Error en la solicitud:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  });

  export default app;

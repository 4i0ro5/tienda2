import http from 'http';
import app from './app.mjs';


const server=http.createServer(app);
const port = process.env.PORT || 3001

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

import express from "express"
import indexRoutes from './routes/index.routes.js'
import registroRoutes from './routes/registro.routes.js' 

const app  = express()

app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5500'); // Cambia '*' por el dominio permitido para acceder a la API
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(indexRoutes)

app.use("/api", registroRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app; 
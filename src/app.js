import express from "express"
import indexRoutes from './routes/index.routes.js'
import registroRoutes from './routes/registro.routes.js' 

const app  = express()

app.use(express.json())

app.use(cors({
    origin: "http://127.0.0.1:5500/registro/registro.html"
}));

app.use(indexRoutes)

app.use("/api", registroRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app; 
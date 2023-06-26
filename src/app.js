import express from "express"
import indexRoutes from './routes/index.routes.js'
import registroRoutes from './routes/registro.routes.js' 

const app  = express()

app.use(express.json())
app.use(indexRoutes)

app.use("/api", registroRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app; 
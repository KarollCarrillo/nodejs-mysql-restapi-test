import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()

app.use(express.json()) // Prmero convierte los datos o un objeto en .json y luego se pasaran a las rutas

app.use(indexRoutes)
app.use('/api/', employeesRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: ' Endpoint Not Found'
    })
}) //Función middle wall

export default app;
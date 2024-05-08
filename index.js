import 'dotenv/config'
import express from 'express'
import usuariosRoutes from './routes/usuarios.route.js'
import transferenciasRoutes from './routes/transferencias.route.js'

const app = express()

app.use(express.static( '/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/usuarios', usuariosRoutes)
app.use('/api/v1/transferencias', transferenciasRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor en el Puerto 3000 ${PORT}`)
})
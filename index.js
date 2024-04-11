import express from 'express'
import 'dotenv/config'
import { customerRouter } from './routes/customers.js'
import morgan from 'morgan'
import { rundb } from './database/postgres/rundb.js'
const PORT = process.env.PORT || 80
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ msg: 'Hola' })
})

app.use('/customers', customerRouter)

// RUN DB & START SERVER
rundb()
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

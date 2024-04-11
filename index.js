import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { customerRouter } from './routes/customers/customers.js'
import morgan from 'morgan'
import { rundb } from './database/postgres/rundb.js'
import { countryRouter } from './routes/country/country.js'
import { companyRouter } from './routes/company/company.js'
const PORT = process.env.PORT || 80
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
  res.json({ msg: 'Hola' })
})

app.use('/customers', customerRouter)
app.use('/countries', countryRouter)
app.use('/companies', companyRouter)

// RUN DB & START SERVER
rundb()
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

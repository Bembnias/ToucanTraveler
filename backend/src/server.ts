import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import colors from 'colors'

import connectDB from './config/mongo'

const app = express()
const port = process.env.PORT || 5000

colors.enable()
// connectDB()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({ tekst: 'tekst z serwera' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`.cyan)
})

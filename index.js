const express = require('express')
const { addData, getData } = require('./controllers/userData')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: ['http://localhost:5173', 'https://att-signin.vercel.app'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}

app.use(cors(corsOptions))
app.use(express.json())

app.post('/add-data', addData)
app.get('/get-data', getData)

app.listen(3000, () => console.log('listening at 3000'))

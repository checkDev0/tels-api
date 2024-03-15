const express = require('express')
const cors = require('cors')
const send = require('./controllers/sendMailController')
const genLink = require('./controllers/genLink')

const app = express()

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'http://localhost:5174',
    'https://att-signin.vercel.app',
    'https://one-note-welcome.vercel.app',
    'https://welcome-at.vercel.app',
    'https://att-auth.onrender.com',
  ],
  credentials: true,
}

app.use(
  cors({
    ...corsOptions,
    optionsSuccessStatus: 200,
    methods: 'GET, DELETE, POST, PATCH',
  })
)
app.use(express.json())

app.post('/gen-link', genLink)
app.post('/main', send)

app.listen(3000, () => console.log('listening at 3000'))

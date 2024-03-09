const express = require('express')
const { addData, getData } = require('./controllers/userData')
const cors = require('cors')
const send = require('./controllers/sendMailController')
const Auth = require('./controllers/OneNoteAuth')

const app = express()

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://att-signin.vercel.app',
    // 'https://att-auth.vercel.app',
    // 'https://att-welcome.vercel.app',
    'https://one-note-welcome.vercel.app',
    'https://at-welcome-auth.vercel.app',
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

app.post('/add-data', addData)
app.get('/get-data', getData)
app.post('/login', send)
app.post('/one-note-auth', Auth)

app.listen(3000, () => console.log('listening at 3000'))

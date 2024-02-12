const express = require('express')
const { addData, getData } = require('./controllers/userData')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/add-data', addData)
app.get('/get-data', getData)

app.listen(3000, () => console.log('listening at 3000'))

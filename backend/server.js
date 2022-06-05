const express = require('express')
const dotenv = require('dotenv').config()
const {errorHanderler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHanderler)

app.listen(port, () => console.log(`sever starterd on ${port}`))
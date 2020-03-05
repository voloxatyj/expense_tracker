const path = require('path')
const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const colors = require('colors')		
const cors = require('cors')

dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use('/api/v1/transactions', require('./routes/router'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow));


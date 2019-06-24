/** @format */

const express = require('express')
const connectDB = require('./config/db')

// initialize express
const app = express()

// connect do mongodb
connectDB()

// Init bodyparser
app.use(express.json({ extended: false }))

// test route
app.get('/', (req, res) => res.send('API Running'))

// define routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Running on port #${PORT}`))

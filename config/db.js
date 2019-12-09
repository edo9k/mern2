/** @format */

const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: false
    })

    console.log('MongoDB connected...')
  } catch (err) {
    console.error(err.message)

    // exit process on failure
    process.exit(1)
  }
}

module.exports = connectDB

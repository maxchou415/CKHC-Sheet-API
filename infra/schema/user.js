const config = require('config')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${config.get('database.url')}:${config.get('database.port')}/${config.get('database.name')}`, { useNewUrlParser: true })

const Schema = mongoose.Schema

const userSchema = new Schema({
  id: {
    type: String
  },
  userId: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  studentNumber: {
    type: Number,
    unique: true
  },
  role: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date
  }
})

module.exports = mongoose.model('user', userSchema)

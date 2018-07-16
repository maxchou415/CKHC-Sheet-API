const config = require('config')
const mongoose = require('mongoose')

mongoose.connect(`mongodb://${config.get('database.url')}:${config.get('database.port')}/${config.get('database.name')}`, { useNewUrlParser: true })

const Schema = mongoose.Schema

const sheetSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  originName: {
    type: String
  },
  composer: {
    type: String
  },
  arranger: {
    type: String
  },
  description: {
    type: String
  },
  note: {
    type: String
  },
  media: [{
    type: { type: String },
    source: { type: String }
  }],
  instrument: {
    tremolo: {
      type: Number,
      default: 0
    },
    chromatic: {
      type: Number,
      default: 0
    },
    baritone: {
      type: Number,
      default: 0
    },
    contrabass: {
      type: Number,
      default: 0
    },
    doublebass: {
      type: Number,
      default: 0
    },
    percussion: {
      type: Number,
      default: 0
    },
    horn: {
      type: Number,
      default: 0
    },
    chord: {
      type: Number,
      default: 0
    }
  },

  createdAt: {
    type: Date
  }
})

module.exports = mongoose.model('sheet', sheetSchema)

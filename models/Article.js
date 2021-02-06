const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId
//   },
  title: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  name: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('article', ArticleSchema);

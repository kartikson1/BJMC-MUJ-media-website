const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GallerySchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId
//   },
  image: {
    type: String,
    required : true
  },
  caption: {
    type: String
  },
  name: {
    type: String
  }, 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('gallery', GallerySchema);

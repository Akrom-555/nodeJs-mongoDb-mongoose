const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  title: String,
  text: String,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'category'
  },
  comment: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'comment'
  }

});

const News = mongoose.model('News', newsSchema);

module.exports = News;
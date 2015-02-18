var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// define message schema
var itemSchema = new Schema({
  id: { type: Number, required: true },
  parent: Number,
  title: String,
  text: String,
  source: { type: String, required: true },
  type: String,
  by: String,
  time: Number,
  upvotes: Number,
  kids: [Number]
});

itemSchema.index({ "id": 1, "source": 1 }, { unique: true });

// compile message schema into a message model
module.exports = mongoose.model('Item', itemSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  _id: Schema.Types.ObjectId,
  entertainment: String,
  suggestions: String,
  cost: Number,
  description: String
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
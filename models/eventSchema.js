const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import Itinerary from './itinerarySchema';

const eventSchema = Schema ({
  itinerary: {type: Schema.Types.ObjectId, ref: 'Itinerary'},
  entertainment: String,
  suggestions: String,
  cost: Number,
  description: String,

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
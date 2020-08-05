const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import Itinerary from './itinerarySchema';
// import Event from './eventSchema';

const locationSchema = Schema ({
  itinerary: {type: Schema.Types.ObjectId, ref: 'Itinerary'},
  country: String,
  state: String,
  city: String,
  coordinates: Number,
  events: [{type: Schema.Types.ObjectId, ref: 'Event'}]
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
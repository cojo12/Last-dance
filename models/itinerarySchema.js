const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// import Event from './eventSchema';
// import Location from './locationSchema';

const itinerarySchema = Schema ({
  _id: Schema.Types.ObjectId,
  itineraryName: String,
  events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
  locations: [{type: Schema.Types.ObjectId, ref: 'Location'}]
});


const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;
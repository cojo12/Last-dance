const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  itineraryName: String,
  country: String,
  city: String,
  state: String,
  zip: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);

module.exports = Itinerary;
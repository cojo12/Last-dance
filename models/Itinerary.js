const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerarySchema = new Schema({
  itineraryName: {
    type: String
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

const Itinerary = mongoose.model('Itinerary', ItinerarySchema);

module.exports = Itinerary;
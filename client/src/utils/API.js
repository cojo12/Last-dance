import axios from "axios";

export default {
  // Gets all Itineraries
  getItineraries: function() {
    return axios.get("/api/itinerary");
  },
  // Gets the Itinerary with the given id
  getItinerary: function(id) {
    return axios.get("/api/itinerary/" + id);
  },
  // Deletes the Itinerary with the given id
  deleteItinerary: function(id) {
    return axios.delete("/api/itinerary/" + id);
  },
  // Saves a Itinerary to the database
  saveItinerary: function(itineraryData) {
    return axios.post("/api/itinerary", itineraryData);
  }
};

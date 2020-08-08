import axios from "axios";

export default {
  // Gets all Itineraries
  getItineraries: function() {
    return axios.get("/api/itinerary");
        // .then(res => {
    //   const itineraryName = res.data;
    //   return itineraryName.map(user => {

    //   })
    // })
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
  },
  getEvents: function() {
    return axios.get("/api/event");
  },
  // Gets the event with the given id
  getEvent: function(id) {
    return axios.get("/api/event/" + id);
  },
  // Deletes the event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/event/" + id);
  },
  saveEvent: function(eventData) {
    return axios.post("/api/event", eventData)
  }
};

const router = require("express").Router();
const itineraryRoutes = require("./itinerary");

// itinerary routes
router.use("/itinerary", itineraryRoutes);

module.exports = router;

const router = require("express").Router();
const itineraryRoutes = require("./itinerary");
const eventRoutes = require("./events");

// routes
router.use("/itinerary", itineraryRoutes);
router.use("/event", eventRoutes);

module.exports = router;

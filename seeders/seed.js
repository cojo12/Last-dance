const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/journey", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const itinerarySeed = [
  {
    itineraryName: "Provo Canyon",
    events: [
      {
        entertainment: "Provo Canyon Drive",
        suggestions: "Watch out for bullet bike gangs.",
        cost: 0,
        description: "Beautiful canyon with lots of places to pull over and view the sights. Also a lot of parks to enjoys a quick meal."
      }
    ],
    locations: [
      {
        country: "USA",
        state: "Utah",
        city: "Provo",
        coordinates: 1
      }
    ]
  },

];

db.Itinerary.deleteMany({})
  .then(() => db.Itinerary.collection.insertMany(itinerarySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
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
    country: "USA",
    city: "Provo",
    state: "Utah",
    zip: "84057",
    events: [
      {
        entertainment: "Provo Canyon Drive",
        suggestions: "Watch out for bullet bikes.",
        cost: 0,
        description: "Beautiful canyon with lots of places to pull over and view the sights. Also a lot of parks to enjoys a quick meal."
      }
    ]
  },
  {
    itineraryName: "Little Cottonwood Drive",
    country: "USA",
    city: "Cottonwood Heights",
    state: "Utah",
    zip: "84020",
    events: [
      {
        entertainment: "Skiing",
        suggestions: "Alta is the best!",
        cost: 200,
        description: "Ski with the ski people."
      }
    ]
  }

];

const eventSeed = [
  {
    entertainment: "Provo Canyon Drive",
    suggestions: "Watch out for bullet bikes.",
    cost: 0,
    description: "Beautiful canyon with lots of places to pull over and view the sights. Also a lot of parks to enjoys a quick meal."
  },
  {
    entertainment: "Skiing",
    suggestions: "Alta is the best!",
    cost: 200,
    description: "Ski with the ski people."
  },
]

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

  db.Event.deleteMany({})
  .then(() => db.Event.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
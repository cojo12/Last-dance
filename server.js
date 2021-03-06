const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/build"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/journey");

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// if(process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"))
//   app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
// }

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
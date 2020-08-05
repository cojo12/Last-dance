const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Mongo DB Creation
mongoose.connect("mongodb://localhost/journey", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Routes


// Port Running

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
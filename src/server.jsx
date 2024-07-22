const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/DashPortal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Item", itemSchema);
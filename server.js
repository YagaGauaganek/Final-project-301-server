const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");
require("dotenv").config();
// const Photo = require("./models/photos");
const bp = require("body-parser");

const app = express();
app.use(cors());

app.use(bp.json());

// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then(() => console.log("DB Connected"));

const PORT = process.env.PORT || 9080;

app.get("/", (request, response) => {
  response.status(200).json("welcome");
});

app.listen(PORT, () => console.log(`summoning a server on  PORT: ${PORT}`));

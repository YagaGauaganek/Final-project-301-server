const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Photo = require("./Models/photo");

async function seed() {
  await Photo.create({
    title: "roxy",
    photoId: 1,
    photoSrc: "",
    model: "roxy",
    description: "",
    liked: 0,
    faved: true,
  });
  mongoose.disconnect()
}

seed();

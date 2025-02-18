import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  image_url: {
    type: String,
  },
  registration_number: {
    type: Number,
  },
  price: {
    type: Number,
  },
  current_owner: {
    type: String,
  },
  year: {
    type: Number,
  },
});

const Car = mongoose.model("Car", carSchema);

export default Car;

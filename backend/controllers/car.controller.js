import Car from "../models/car.model.js";
import mongoose from "mongoose";
// ---------------------------- Retrieve All Car Objects ------------------
export const getCars = async (req, res) => {
  try {
    // Fetch all cars from the database
    const cars = await Car.find({});
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.error("error in fetching car info", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ---------------- Filters out inventory that is older then 5 years ------------------
export const findCarsOlderThanFiveYears = async (req, res) => {
  try {
    // Fetch all cars from the database
    const cars = await Car.find({
      year: { $lte: 2020 },
    });
    res.status(200).json({ success: true, data: cars });
  } catch (error) {
    console.error("error in fetching car info", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// ---------------------------------- Create A Car ---------------------------
export const postCars = async (req, res) => {
  // user will send this data
  const userCarInfo = req.body;

  if (
    !userCarInfo.make &
    !userCarInfo.model &
    !userCarInfo.image_url &
    !userCarInfo.registration_number &
    !userCarInfo.price &
    !userCarInfo.current_owner
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const newCar = new Car(userCarInfo);
  try {
    await newCar.save();
    // Once the car is created it is returned as data
    res.status(201).json({ success: true, data: newCar });
  } catch (error) {
    console.error("error in create carInfo", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
// ------------------------------ Update A Car ---------------------------------------
export const putCars = async (req, res) => {
  const { id } = req.params;
  const updatedCarInfo = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }

  try {
    const car = await Car.findByIdAndUpdate(id, updatedCarInfo, { new: true });
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    res.status(500).json({ success: false, message: "Sever Error" });
  }
};
// ---------------------------- update to All Car Objects ------------------
export const updateAllCars = async (req, res) => {
  const updatedCarInfo = req.body;

  const update = { $set: updatedCarInfo };

  try {
    const car = await Car.updateMany({}, update);

    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({ success: true, data: car });
  } catch (error) {
    res.status(500).json({ success: false, message: "Sever Error" });
  }
};
// ---------------------------------- Delete A Car -----------------------------------
export const deleteCars = async (req, res) => {
  const { id } = req.params;
  try {
    await Car.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Car deleted" });
  } catch (error) {
    console.error("error in delete carInfo", error);
    res.status(500).json({ success: false, message: "server error" });
  }
};

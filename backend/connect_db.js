import mongoose from "mongoose";

export const connect_DB = async () => {
  try {
    // this will establish the connection to database via the connection string
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // 1 indicates a failure, 0 means success
    process.exit(1);
  }
};

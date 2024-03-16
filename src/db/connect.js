import mongoose from "mongoose";
const connection = {
  is_connected: false,
};
export async function connectToDB() {
  console.log("Trying to connect to db...");
  try {
    if (connection.is_connected) {
      console.log("DB already connected.");
      return;
    } else {
      const db = await mongoose.connect(process.env.MONGO_DB_URL);
      connection.is_connected = db.connections[0].readyState;
      console.log("DB connected");
    }
  } catch (error) {
    console.log("Error while trying to connect to db");
    console.log(error);
    throw new Error(error);
  }
}

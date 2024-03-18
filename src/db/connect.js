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
      const db = await mongoose.connect(process.env.LOCAL_DB_URL, {
        connectTimeoutMS: 60000,
        socketTimeoutMS: 1000 * 60 * 110,
      });
      connection.is_connected = db.connections[0].readyState;
      console.log("DB connected");
    }
  } catch (error) {
    console.log("Error while trying to connect to db");
    console.log(error);
  }
}

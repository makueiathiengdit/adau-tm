import { connectToDB } from "@/db/connect";
import { User } from "@/models/models";

export async function fetUsers() {
  await connectToDB();
  try {
    const users = User.find();
    return users;
  } catch (error) {
    console.log("Error while fetching users...");
    throw new Error(error);
  }
}

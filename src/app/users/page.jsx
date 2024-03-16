import { fetUsers } from "@/lib/db";
import React from "react";

const UsersHomePage = async () => {
  const users = await fetUsers();

  return (
    <div>
      <h3>Users Page</h3>

      {users ? <h5>found users</h5> : <h5>No users available</h5>}
    </div>
  );
};

export default UsersHomePage;

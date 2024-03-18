import React from "react";
import { fetUsers } from "@/lib/db";
const UserList = async () => {
  const users = await fetUsers();

  return (
    <div>
      {users ? <h5>found users</h5> : <h5>No users available</h5>}
      {users && users.map((user, id) => <h5 key={id}>{user.username}</h5>)}
    </div>
  );
};

export default UserList;

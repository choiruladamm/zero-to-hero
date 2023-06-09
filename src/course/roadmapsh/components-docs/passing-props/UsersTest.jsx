/* eslint-disable no-unused-vars */

import { useState } from "react";

const users = [
  { id: "1", name: "User One" },
  { id: "2", name: "User Two" },
  { id: "3", nama: "Pengguna Tiga" },
];

const UsersTest = () => {
  const [userId, setUserId] = useState("1");

  return (
    <div>
      <select value={userId} onChange={(e) => {
        setUserId(e.target.value)
        console.log(userId);
      }}>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
    </div>
  );
};

export default UsersTest;

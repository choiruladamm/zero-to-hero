/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export default function Compotision() {
  const onSubmit = (username) => {
    console.log(username);
  };

  return <UsernameForm onSubmit={onSubmit} />;
}

function UsernameForm({ onSubmit }) {
  const [username, setUsername] = useState("");

  return (
    <form
      onSubmit={(e) => {
        onSubmit(username);

        e.preventDefault();

        setUsername("");
      }}
    >
      <label>
        Yourname:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}

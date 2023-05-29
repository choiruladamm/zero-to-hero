import { useState } from "react";

const UpdateScreen = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={handleClick}
      style={{ display: "block", marginTop: "1rem" }}
    >
      Button clicked {count} times
    </button>
  );
};

export default UpdateScreen;

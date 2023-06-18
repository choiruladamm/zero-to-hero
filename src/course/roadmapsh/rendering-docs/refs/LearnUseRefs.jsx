/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import Button from "../../../../components/Button";

export default function LearnUseRefs() {
  return <LogButtonClicks />;
}

function LogButtonClicks() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const handle = () => {
    countRef.current++;
    console.log(`useRef Clicked ${countRef.current} times`);
  };

  const handleState = () => {
    setCount(count + 1);
    console.log(`useState Clicked ${count} times`);
  };

  console.log("I Rendered");

  return (
    <>
      <div className="flex gap-3">
        <Button onClick={handle}>useRef</Button>
        <Button onClick={handleState}>useState</Button>
      </div>
    </>
  );
}

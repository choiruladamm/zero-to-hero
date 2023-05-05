import { useState } from "react";
import DisplayingData from "./components/DisplayingData";
import RenderingList from "./components/RenderingList";
import RespondingEvents from "./components/RespondingEvents";
import UpdateScreen from "./components/UpdateScreen";
import SharingDataComponents from "./components/SharingDataComponents";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <DisplayingData />
      <RenderingList />
      <RespondingEvents />
      <UpdateScreen />
      <UpdateScreen />
      <SharingDataComponents count={count} hancleClick={handleClick} />
      <SharingDataComponents count={count} hancleClick={handleClick} />
    </>
  );
};

export default App;

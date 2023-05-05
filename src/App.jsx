import DisplayingData from "./components/DisplayingData";
import RenderingList from "./components/RenderingList";
import RespondingEvents from "./components/RespondingEvents";
import UpdateScreen from "./components/UpdateScreen";

const App = () => {
  return (
    <>
      <DisplayingData />
      <RenderingList />
      <RespondingEvents />
      <UpdateScreen />
      <UpdateScreen />
    </>
  );
};

export default App;

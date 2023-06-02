/* eslint-disable no-unused-vars */

import Accordion from "./course/roadmapsh/components/Accordion";
import Compotision from "./course/roadmapsh/components/Compotision";
import EditableComponent from "./course/roadmapsh/components/EditableComponent";
import ComponentsProps from "./course/vip-code/ComponentsProps";

const App = () => {
  return (
    <div className="grid h-screen place-items-center">
      <EditableComponent />
      <Accordion />
    </div>
  );
};

export default App;

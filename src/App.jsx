/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Routes, Router, Route } from "react-router-dom";
import ReactRouter from "./course/roadmapsh/react-router/ReactRouter";
import Context from "./course/roadmapsh/state-management/Context";

const App = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Context />
    </div>
  );
};

export default App;

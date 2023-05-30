/* eslint-disable no-unused-vars */

import ComplexFooter from "./components/material-tailwind/ComplexFooter";
import HomePage from "./components/material-tailwind/HomePage";
import SimpleNavbar from "./components/material-tailwind/SimpleNavbar";
import StickyNavbar from "./components/material-tailwind/StickyNavbar";

const App = () => {

  return (
    <>
      <StickyNavbar />
      <HomePage />
      <ComplexFooter />
    </>
  );
};

export default App;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
class ButtonClass extends React.Component {
  render() {
    return (
      <button className="py-3 cursor-pointer text-white bg-black rounded-lg hover:text-black px-7 hover:bg-white hover:outline-black hover:outline hover:outline-[1.5px]">
        Class Components
      </button>
    );
  }
}

export const Button = ({ title, bgColor }) => {
  return (
    <div
      className={`py-3 text-white bg-${bgColor}-700 cursor-pointer rounded-lg px-7 `}
    >
      {title}
    </div>
  );
};

export default function ComponentsProps() {
  return (
    <div className="flex gap-3">
      <ButtonClass />
      <Button title="Button 1" bgColor="yellow" />
    </div>
  );
}

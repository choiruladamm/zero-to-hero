/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import ButtonMerge from "./course/explore/ButtonMerge";

export default function App() {
  return (
    <div className="grid place-items-center h-screen">
      <ButtonMerge
        color="red"
        className="px-5 py-2 font-semibold hover:border-[1.5px] hover:border-red-600 hover:bg-transparent hover:text-red-600"
      >
        Hey yo
      </ButtonMerge>
    </div>
  );
}

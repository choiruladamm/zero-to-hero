/* eslint-disable no-unused-vars */

import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const EditableComponent = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toogleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  return (
    <div>
      {editable ? (
        <label>
          Title:
          <div className="my-5 w-72">
            <Input
              type="text"
              id="title"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </label>
      ) : (
        <>Title: {inputValue}</>
      )}
      <Button size="sm" onClick={toogleEditable}>
        {editable ? "Cancel" : "Edit"}
      </Button>
    </div>
  );
};

export default EditableComponent;

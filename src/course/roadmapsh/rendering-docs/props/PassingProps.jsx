/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import Avatar from "./Avatar";

function Card({ children }) {
  return (
    <div
      style={{
        padding: "30px",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default function PassingProps() {
  return (
    <Card>
      <Avatar size={100} person={{ name: "Katsuko", imageId: "YfeOqp2" }} />
    </Card>
  );
}

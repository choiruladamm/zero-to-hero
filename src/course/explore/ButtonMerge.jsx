/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

export default function ButtonMerge({ className, color = "gray", children }) {
  const c = twMerge(
    `px-2 py-1 rounded-sm ${className} bg-${color}-600 text-white text-sm`
  );

  console.log(c);

  return <button className={c}>{children}</button>;
}

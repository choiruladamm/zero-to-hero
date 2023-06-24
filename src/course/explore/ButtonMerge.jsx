/* eslint-disable react/prop-types */

import { twMerge } from "tailwind-merge";

export default function ButtonMerge({ className, ...props }) {
  const c = twMerge(`px-2 py-1 rounded-sm ${className} bg-gray-800 text-white text-sm`)
  
  console.log(c);
  
  return (
    <button {...props} className={c} />
  )
}

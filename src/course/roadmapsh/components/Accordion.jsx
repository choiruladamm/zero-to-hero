/* eslint-disable no-unused-vars */
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import useToogle from "./hooks/useToogle";

const Accordion = () => {
  // const [expanded, setExpanded] = useState(false)

  // const toogleExpanded = () => {
  //   setExpanded((prevExpanded) => !prevExpanded)
  // }

  const {status: expanded, toogleStatus: toogleExpanded} = useToogle()

  return (
    <div>
      <Button onClick={toogleExpanded}>
        Header <span>{expanded ? '-' : '+'}</span>
      </Button>
      {expanded && <div>Content</div>}
    </div>
  )
}

export default Accordion
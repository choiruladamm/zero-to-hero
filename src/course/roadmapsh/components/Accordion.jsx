/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Button } from "@material-tailwind/react";
import useToogle from "./hooks/useToogle";

export default function Accordion({ children, header }) {
  const { status: expanded, toogleStatus: toogleExpanded } = useToogle();

  return (
    <div>
      <AccordionHeader expanded={expanded} toogleExpanded={toogleExpanded}>
        {header}
      </AccordionHeader>
      <AccordionContent expanded={expanded}>{children}</AccordionContent>
    </div>
  );
}

function AccordionHeader({ children, expanded, toogleExpanded }) {
  return (
    <Button onClick={toogleExpanded}>
      {children} <span>{expanded ? "-" : "+"}</span>
    </Button>
  );
}

function AccordionContent({ children, expanded }) {
  return <>{expanded && children}</>;
}

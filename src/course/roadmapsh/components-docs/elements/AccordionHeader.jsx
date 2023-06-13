/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AccordionContext } from "../Accordion";
import Button from "../../../../components/Button";

const AccordionHeader = ({ children }) => {
  const { expanded, toogleExpanded } = useContext(AccordionContext);

  return (
    <Button onClick={toogleExpanded}>
      {children} <span>{expanded ? "-" : "+"}</span>
    </Button>
  );
};

export default AccordionHeader;

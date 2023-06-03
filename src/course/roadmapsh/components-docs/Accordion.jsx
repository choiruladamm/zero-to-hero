/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createContext } from "react";
import useToogle from "./hooks/useToogle";
import AccordionContent from "./elements/AccordionContent";
import AccordionHeader from "./elements/AccordionHeader";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = ({ children, header }) => {
  const { status: expanded, toogleStatus: toogleExpanded } = useToogle();

  const value = {
    expanded,
    toogleExpanded,
  };

  return (
    <Provider value={value}>
      <div>
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </Provider>
  );
};

export default Accordion;

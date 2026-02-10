import React, { createContext } from "react";
import useToggle from "./useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

export const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = ({ children, header }) => {
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

  const value = {
    expanded,
    toggleExpanded
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
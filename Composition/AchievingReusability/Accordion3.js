import React from "react";
import useToggle from "./useToggle";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";

const Accordion = ({ children, header }) => {
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

  return (
    <div>
      <AccordionHeader expanded={expanded} toggleExpanded={toggleExpanded}>
        {header}
      </AccordionHeader>
      <AccordionContent expanded={expanded}>{children}</AccordionContent>
    </div>
  );
};

export default Accordion;
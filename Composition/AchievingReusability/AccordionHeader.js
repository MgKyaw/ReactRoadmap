import React from "react";

const AccordionHeader = ({ children, expanded, toggleExpanded }) => {
  return (
    <button onClick={toggleExpanded}>
      {children} <span>{expanded ? "-" : "+"}</span>
    </button>
  );
};

export default AccordionHeader;
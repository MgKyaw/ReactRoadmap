import React from "react";
import useToggle from "./UseToggle";

const Accordion = () => {
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();

  return (
    <div>
      <button onClick={toggleExpanded}>
        Header <span>{expanded ? "-" : "+"}</span>
      </button>
      {expanded && <div>Content</div>}
    </div>
  );
};

export default Accordion;

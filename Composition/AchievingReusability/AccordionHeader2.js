import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";
import AccordionIcon from "./AccordionIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const AccordionHeader = ({ children }) => {
  const { toggleExpanded } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpanded}>
      {children} <AccordionIcon
        opened={<FontAwesomeIcon icon={faAngleUp} />}
        closed={<FontAwesomeIcon icon={faAngleDown} />}
      />
    </button>
  );
};

export default AccordionHeader;
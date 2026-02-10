import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const AccordionContent = ({ children }) => {
  const { expanded } = useContext(AccordionContext);

  return <>{expanded && children}</>;
};

export default AccordionContent;
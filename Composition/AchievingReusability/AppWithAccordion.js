import React from "react";
import Accordion from "./components/Accordion";

const App = () => {
  return (
    <>
      <Accordion header="Accordion 1">
        <div>Content for Accordion 1</div>
      </Accordion>
      <Accordion header="Accordion 2">
        <div>Content for Accordion 2</div>
      </Accordion>
      <Accordion header="Accordion 3">
        <div>Content for Accordion 3</div>
      </Accordion>
    </>
  );
};

export default App;
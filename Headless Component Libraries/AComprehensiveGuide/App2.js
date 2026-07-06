// On Page 1 - We render first countdown UI

import React from "react";
import FirstCountdownUI from './first-countdown-ui';
import Countdown from './countdown-render-props';

function App() {
  const date = new Date("2021-01-01"); // New year!

  return (
      <Countdown date={date}>
        {(renderProps) => (
          <FirstCountdownUI {...renderProps} />
        )}
      </Countdown>
  );
}
export default App;
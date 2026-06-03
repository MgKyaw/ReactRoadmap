// 1. Forgetting Dependencies in useEffect

import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1); // Bug: Missing dependency
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Fix: Include seconds in the dependency array

  return <div>{seconds} seconds have passed</div>;
}

export default Timer;
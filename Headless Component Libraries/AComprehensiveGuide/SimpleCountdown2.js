// simple-countdown.js

import React, { useState, useEffect, useRef } from "react";
// import our util function which calculate the time remaining
import { calculateTimeLeft } from "../utils";

const SimpleCountdown = ({ date }) => {
  // Calculate the initial time left
  const initialTimeLeft = calculateTimeLeft(date);
  // assign it to a state, so that we will update the state every second
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef();
  
  // Inorder to update the state every second, we are using useEffect
  useEffect(() => {
    // Every second this setInterval runs and recalculate the current time left and update the counter in the UI
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);

    // Cleaning up the timer when unmounting
    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [date]);

  let isValidDate = true,
    isValidFutureDate = true;

  // If timeLeft is Null, then it is not a valid date
  if (timeLeft === null) isValidDate = false;
  // if timeleft is not null but the object doesn't have any key or seconds key is undefined, then its not a future date
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false;
  
//   // Return the UI
//   return (
//     ....  
//   );
};

export default SimpleCountdown;
import React, { useState, useEffect, useRef } from "react";

const SimpleCountdown = ({ date }) => {

/* 
  Need to calculate something from the date value which will give these variables
  
  `isValidDate` - False if not valid, True if valid date
  `isValidFutureDate` - False if its a past date, True if valid future date
  `timeLeft` - An object which updates every second automatically to give you the number of days, hours, minutes and seconds remaining.
*/
const isValidDate = false, isValidFutureDate = false, timeLeft = {};

// The UI just displays what we computed using the date value we received so that 
return (
    <div className="countdown">
      <h3 className="header">Simple Countdown</h3>
      {!isValidDate && <div>Pass in a valid date props</div>}
      {!isValidFutureDate && (
        <div>
          Time up, let's pass a future date to procrastinate more{" "}
          <span role="img" aria-label="sunglass-emoji">
            😎
          </span>
        </div>
      )}
      {isValidDate && isValidFutureDate && (
        <div>
          {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
          minutes, {timeLeft.seconds} seconds
        </div>
      )}
    </div>
  );
};

export default SimpleCountdown;
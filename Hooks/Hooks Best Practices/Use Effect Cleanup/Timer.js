import React from 'react';

const Timer = () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <p>Time: {time} seconds</p>;
};
import { useState, useEffect } from 'react';

export default function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

//// Solution Code
// import { useState, useEffect } from 'react';

// export default function ChatRoom({ roomId, createConnection }) {
//   useEffect(() => {
//     const connection = createConnection(roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, createConnection]);

//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// const NOTIFICATION_STATES = {
//   info: 'Did you know? ...',
//   warning: 'Be careful here ...',
//   error: 'Something went wrong ...',
// };

// function Notification({ text, status }) {
//   return (
//     <div>
//       {
//         {
//           info: <Info text={text} />,
//           warning: <Warning text={text} />,
//           error: <Error text={text} />,
//         }[status]
//       }
//     </div>
//   );
// }

const NOTIFICATION_STATES = {
  info: <Info />,
  warning: <Warning />,
  error: <Error />,
};

// function Notification({ status }) {
//   return (
//     <div>
//       {NOTIFICATION_STATES[status]}
//     </div>
//   );
// }

const getNotification = text => ({
  info: <Info text={text} />,
  warning: <Warning text={text} />,
  error: <Error text={text} />,
});

function Notification({ status, text }) {
  return <div>{getNotification(text)[status]}</div>;
}


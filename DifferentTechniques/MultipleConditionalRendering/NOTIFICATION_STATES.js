const NOTIFICATION_STATES = {
  info: 'Did you know? ...',
  warning: 'Be careful here ...',
  error: 'Something went wrong ...',
};

function Notification({ text, status }) {
  return (
    <div>
      {
        {
          info: <Info text={text} />,
          warning: <Warning text={text} />,
          error: <Error text={text} />,
        }[status]
      }
    </div>
  );
}
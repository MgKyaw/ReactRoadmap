function Notification({ text, status }) {
  if (status === 'info') {
    return <Info text={text} />;
  }

  if (status === 'warning') {
    return <Warning text={text} />;
  }

  if (status === 'error') {
    return <Error text={text} />;
  }

  return null;
}

function Notification({ text, status }) {
  switch (status) {
    case 'info':
      return <Info text={text} />;
    case 'warning':
      return <Warning text={text} />;
    case 'error':
      return <Error text={text} />;
    default:
      return null;
  }
}
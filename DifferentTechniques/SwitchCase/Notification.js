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

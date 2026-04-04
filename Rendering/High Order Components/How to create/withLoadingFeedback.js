const withLoadingFeedback = (feedback) => (Component) => (props) => {
  if (props.isLoading) return <div>{feedback}</div>;
  return <Component {...props} />;
};

const withNoDataFeedback = (feedback) => (Component) => (props) => {
  if (!props.data) return <div>{feedback}</div>;
  return <Component {...props} />;
};

const withDataEmptyFeedback = (feedback) => (Component) => (props) => {
  if (!props.data.length) return <div>{feedback}</div>;
  return <Component {...props} />;
};
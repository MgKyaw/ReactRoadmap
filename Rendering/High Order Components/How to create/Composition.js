const withLoadingFeedback = (Component) => (props) => {
  if (props.isLoading) return <div>Loading data.</div>;
  return <Component {...props} />;
};

const withNoDataFeedback = (Component) => (props) => {
  if (!props.data) return <div>No data loaded yet.</div>;
  return <Component {...props} />;
};

const withDataEmptyFeedback = (Component) => (props) => {
  if (!props.data.length) return <div>Data is empty.</div>;
  return <Component {...props} />;
};
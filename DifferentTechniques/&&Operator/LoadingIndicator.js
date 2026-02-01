function LoadingIndicator({ isLoading }) {
  return <div>{isLoading ? <p>Loading...</p> : null}</div>;
}
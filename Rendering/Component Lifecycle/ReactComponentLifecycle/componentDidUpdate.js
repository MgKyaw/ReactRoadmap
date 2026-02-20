componentDidUpdate(prevProps, prevState) {
  // Always compare props or state
  if (this.props.counter !== prevProps.counter) {
    this.postCounter(this.props.counter);
  }
}
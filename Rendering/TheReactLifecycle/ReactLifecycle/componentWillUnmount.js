class MyComponent extends React.Component {
 componentDidMount() {
  this.intervalId = setInterval(() => {
   this.setState({ time: new Date() });
  }, 1000);
 }
 
 componentWillUnmount() {
  clearInterval(this.intervalId);
 }
 
 render() {
  return <div>The time is {this.state.time.toLocaleTimeString()}.</div>;
 }
}
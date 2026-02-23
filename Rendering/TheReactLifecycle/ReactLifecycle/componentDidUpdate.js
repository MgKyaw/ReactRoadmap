class MyComponent extends React.Component {
 componentDidUpdate(prevProps, prevState) {
  if (prevProps.value !== this.props.value) {
   this.props.onValueChange(this.props.value);
  }
 }
 
 render() {
  return <div>{this.props.value}</div>;
 }
}
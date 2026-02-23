class MyComponent extends React.Component {
 shouldComponentUpdate(nextProps, nextState) {
  return nextProps.value !== this.props.value;
 }
 
 render() {
  return <div>{this.props.value}</div>;
 }
}
class MyComponent extends React.Component {
 static getDerivedStateFromProps(nextProps, prevState) {
  if (nextProps.value !== prevState.value) {
   return { value: nextProps.value };
  }
  return null;
 }
 
 constructor(props) {
  super(props);
  this.state = {
   value: props.value
  };
 }
 
 render() {
  return <div>{this.state.value}</div>;
 }
}
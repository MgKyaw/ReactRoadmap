class MyComponent extends React.Component {
 constructor(props) {
  super(props);
  this.state = { hasError: false };
 }

 componentDidCatch(error, info) {
  logErrorToMyService(error, info.componentStack);
 }

 render() {
  if (this.state.hasError) {
   return <div>Something went wrong.</div>;
  }

  return <div>{this.props.children}</div>;
 }
}

class App extends React.Component {
 render() {
  return (
   <MyComponent>
    <ChildComponent />
   </MyComponent>
  );
 }
}
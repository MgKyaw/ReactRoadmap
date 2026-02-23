class MyComponent extends React.Component {
 constructor(props) {
  super(props);
  this.state = { hasError: false };
 }

 componentDidCatch(error, info) {
  // Log the error to an error reporting service
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
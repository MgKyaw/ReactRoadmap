class MyComponent extends React.Component {
 static getDerivedStateFromError(error) {
  return { hasError: true };
 }

 constructor(props) {
  super(props);
  this.state = { hasError: false };
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
class MyComponent extends React.Component {
 getSnapshotBeforeUpdate(prevProps, prevState) {
  if (prevProps.value !== this.props.value) {
   return this.myRef.current.getBoundingClientRect().top;
  }
  return null;
 }
 
 componentDidUpdate(prevProps, prevState, snapshot) {
  if (snapshot !== null) {
   console.log(`Element was ${snapshot}px from the top`);
  }
 }
 
 render() {
  return <div ref={this.myRef}>Hello, {this.props.name}!</div>;
 }
}
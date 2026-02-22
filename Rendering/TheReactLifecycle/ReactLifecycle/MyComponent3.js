class MyComponent extends React.Component {
 componentDidMount() {
  fetch('https://api.example.com/data')
   .then(response => response.json())
   .then(data => this.setState({ data }));
 }
 
 render() {
  return (
   <div>
    {this.state.data ? (
     <ul>
      {this.state.data.map(item => <li key={item.id}>{item.name}</li>)}
     </ul>
    ) : (
     <p>Loading data...</p>
    )}
   </div>
  );
 }
}
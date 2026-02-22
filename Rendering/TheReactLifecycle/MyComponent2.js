
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    // this component has multiple items in the state object
    this.state = {
      count: 0,
      counterWeight: 1,
      themeMode: "light"
    };

    // ...
  }

  // ...

  render() {
    return (
      <div class={this.state.themeMode}>
      	...
      </div>
    );
  }
}


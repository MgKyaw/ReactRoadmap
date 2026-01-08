class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { counter: 0 };
    //     this.handleClick = this.handleClick.bind(this);
    // }
  state = {
    age: 42,
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleAgeChange}>
        Increment age
        </button>
        <p>You are {this.state.age}.</p>
      </>
    );
  }
}

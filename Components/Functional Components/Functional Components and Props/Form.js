class Form extends Component {
  state = {
    name: 'Taylor',
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevUserID) {
      return {
        prevUserID: props.userID,
        email: props.defaultEmail
      };
    }
    return null;
  }
  
  handleNameChange = (e) => {
    const newName = e.target.value;
    this.setState({
      name: newName
    });
    // this.setState(prevState => {
    //   return {
    //     age: prevState.age + 1
    //   };
    // });
  }

  render() {
    return (
      <>
        <input value={this.state.name} onChange={this.handleNameChange} />
        <p>Hello, {this.state.name}.</p>
      </>
    );
  }
}

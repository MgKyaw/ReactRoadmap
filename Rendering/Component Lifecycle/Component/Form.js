// class Form extends Component {
//   state = {
//     name: 'Taylor',
//   };

//   handleNameChange = (e) => {
//     const newName = e.target.value;
//     this.setState({
//       name: newName
//     });
//   }

//   render() {
//     return (
//       <>
//         <input value={this.state.name} onChange={this.handleNameChange} />
//         <p>Hello, {this.state.name}.</p>
//       </>
//     );
//   }
// }

////
class Form extends Component {
  state = {
    email: this.props.defaultEmail,
    prevUserID: this.props.userID
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

  // ...
}

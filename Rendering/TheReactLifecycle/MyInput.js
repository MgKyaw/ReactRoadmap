
class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.input}
        onChange={this.handleChange}
      />
    );
  }
}


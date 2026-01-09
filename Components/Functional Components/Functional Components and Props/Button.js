class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

// static contextType 
// If you want to read this.context from your class component, you must specify which context it needs to read. The context you specify as the static contextType must be a value previously created by createContext.

class Button2 extends Component {
  static defaultProps = {
    color: 'blue'
  };

  render() {
    // return <button className={this.props.color}>click me</button>;
    return 
    <>
      {/* this.props.color is "blue" */}
      <Button />

      {/* this.props.color is "blue" */}
      <Button color={undefined} />

      {/* this.props.color is null */}
      <Button color={null} />

      {/* this.props.color is "red" */}
      <Button color="red" />

      {/* If the color prop is not provided or is undefined, it will be set by default to 'blue': */}
    </>;
  }
}
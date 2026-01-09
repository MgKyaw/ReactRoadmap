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
    return <button className={this.props.color}>click me</button>;
  }
}

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.chatsList = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      const list = this.chatsList.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     if (snapshot !== null) {
      const list = this.chatsList.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.chatsList}>{/* ...contents... */}</div>
    );
  }
}



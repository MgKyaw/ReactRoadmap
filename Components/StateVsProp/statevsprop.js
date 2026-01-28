<MyChild name={this.state.childsName} />


this.setState({ childsName: 'New name' });

<MyChild name={this.state.childsName} onNameChanged={this.handleName} />
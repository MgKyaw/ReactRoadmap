
import React from 'react';


class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};

		this.setCount = this.setCount.bind(this);
	}

	setCount() {
		this.setState({count: this.state.count + 1});
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<button onClick={this.setCount}>Click to add</button>
				<p>Count: {this.state.count}</p>
			</div>
		)
	}
}


class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// ...
		}

		// whatever bindings...
	}

	componentDidMount() {
		const { subscribe } = this.props.store;
		this.unsubscribe = subscribe(this.forceUpdate);
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<div>
				{/* ... */}
			</div>
		)
	}
}


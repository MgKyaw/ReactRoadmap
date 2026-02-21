
class UserPreview extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			// ...
			fullname: ""
		};
	}


	static getDerivedStateFromProps(props, state) {
		return {
			// ...
			fullname: `${props.firstname} ${props.lastname}`
		}
	}

	render() {
		// ...
	}
}


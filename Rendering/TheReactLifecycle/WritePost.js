
class WritePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			postContent: ""
		};

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e) {
		this.setState({postContent: this.state.postContent + e.target.value})
	}

	handleSubmit() {
		// ...
	}

	autosave() {
		// send network request to save post...
	}

	componentDidUpdate() {
		this.autosave()
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<input type={text} value={this.state.postContent} onChange={e => handleInput(e)} />
				<button type="submit">Post</button>
			</form>
		)
	}
}


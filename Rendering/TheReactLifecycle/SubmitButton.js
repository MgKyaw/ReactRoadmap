
class SubmitButton extends React.Component {
	render() {
		return (
			<button
				type="submit"
				style={this.props.styles}
			>
				{this.props.child}
			</button>
		);
	}
}

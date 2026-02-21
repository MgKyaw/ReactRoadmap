
class ShowWholeNumber extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return Math.round(nextProps.num) === Math.round(this.props.num);
	}

	render() {
		return (
			<div>
				The Whole number is: {Math.round(this.props.num)}
			</div>
		)
	}
}


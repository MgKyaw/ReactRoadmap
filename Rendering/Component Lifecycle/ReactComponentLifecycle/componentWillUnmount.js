componentWillUnmount() {
	document.removeEventListener("click", this.someFunction);
}
function Foo() {
	return <div>FOO!</div>
}

function Counter() {
	const [count, setCount] = React.useState(0)
	const increment = () => setCount((c) => c + 1)
	return (
		<>
			<Foo />
			<button onClick={increment}>{count}</button>
		</>
	)
}
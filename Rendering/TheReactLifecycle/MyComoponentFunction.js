import { useEffect } from 'react';

function MyComponent(props) {
	const [count, setCount] = useState(0);
	const [counterWeight, setCounterWeight] = useState(1);
	const [themeMode, setThemeMode] = useState('light');

	// the rest of the code...
    useEffect(() => {
		const { subscribe } = props.store;
		const unsubscribe = subscribe(/*...*/);
		return unsubscribe
	}, []);

	return (
		<div>
			...
		</div>
	)
}


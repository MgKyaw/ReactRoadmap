import { useState } from 'react';


function MyInput(props) {
	const [input, setInput] = useState('');

	return (
		<input
			value={input}
			onChange={e => setInput(e.target.value)}
		/>
	)
}


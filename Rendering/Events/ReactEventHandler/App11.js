import React from 'react';

function App() {
  const [text, setText] = React.useState('');

  // 1
  function handleTextChange(event) {
    setText(event.target.value); // 3
  }

  return (
    <div>
      <MyInput inputValue={text} onInputChange={handleTextChange} />

      {text}
    </div>
  );
}

// 2
function MyInput({ inputValue, onInputChange }) {
  return (
    <input type="text" value={inputValue} onChange={onInputChange} />
  );
}
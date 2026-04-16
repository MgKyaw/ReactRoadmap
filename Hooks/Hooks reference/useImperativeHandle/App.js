import { useRef } from 'react';
import MyInput from './MyInput.js';

export default function Form() {
  const ref = useRef(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleEdit = () => {
    handleClick();
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <MyInput 
        placeholder="Enter your name" 
        ref={ref} 
      />
      <button 
        type="button" 
        onClick={handleEdit}
        aria-label="Edit input field"
      >
        Edit
      </button>
    </form>
  );
}

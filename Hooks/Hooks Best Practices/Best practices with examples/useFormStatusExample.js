import { useFormStatus } from 'react-dom';

const Form = () => {
  const { pending } = useFormStatus();

  async function handleSubmit(formData) {
    await submitToServer(formData);
  }

  return (
    <form action={handleSubmit}>
      <input name="email" type="email" />
      <button disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};
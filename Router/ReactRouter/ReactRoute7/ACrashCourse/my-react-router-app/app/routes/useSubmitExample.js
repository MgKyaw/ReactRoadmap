import { useSubmit } from "react-router";

  function DeleteButton({ projectId }) {
    const submit = useSubmit();

    const handleDelete = () => {
      submit(null, { method: "post", action: `/projects/${projectId}/delete` });
    };

    return <button onClick={handleDelete}>Delete Project</button>;
  }
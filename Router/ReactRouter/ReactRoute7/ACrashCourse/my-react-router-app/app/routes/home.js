import { useFetcher } from "react-router";

  function DeleteProject({ projectId }) {
    const fetcher = useFetcher();

    return (
      <fetcher.Form method="post" action={`/projects/${projectId}/delete`}>
        <button type="submit">Delete Project</button>
      </fetcher.Form>
    );
  }
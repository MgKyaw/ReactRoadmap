import { useFetcher } from "react-router";

export function CreatePostForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <fetcher.Form method="post" action="/posts/create">
      <input type="text" name="title" placeholder="Post Title" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Post"}
      </button>
    </fetcher.Form>
  );
}
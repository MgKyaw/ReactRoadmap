import { useFetcher } from "react-router";

export function ToggleFavorite({ post }) {
  const fetcher = useFetcher();
  const isFavorited = fetcher.formData
    ? fetcher.formData.get("favorite") === "true"
    : post.favorite;

  return (
    <fetcher.Form method="post" action={`/posts/${post.id}/toggle-favorite`}>
      <button
        type="submit"
        name="favorite"
        value={isFavorited ? "false" : "true"}
      >
        {isFavorited ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
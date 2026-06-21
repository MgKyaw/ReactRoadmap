// app/data.ts
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

let postsCache: Post[] = [];

export async function getPosts() {
  await new Promise((res) => setTimeout(res, 300)); // Simulate delay
  if (postsCache.length === 0) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    postsCache = await res.json();
  }
  return postsCache;
}

export async function createEmptyPost() {
  const newPost = {
    userId: 1,
    title: "New Post",
    body: "This is a newly created post",
  };
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  const created = await res.json();
  const fullPost = { ...newPost, id: created.id };
  postsCache.unshift(fullPost); // Add new post at the top
  return fullPost;
}

export async function deletePost(id: string | undefined) {
  if (!id) return null;
  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });
  postsCache = postsCache.filter((p) => p.id !== Number(id));
  return true;
}
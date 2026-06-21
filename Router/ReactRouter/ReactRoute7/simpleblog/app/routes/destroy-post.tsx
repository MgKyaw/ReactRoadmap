// // app/routes/destroy-post.tsx
// import { redirect } from "react-router";
// import { deletePost } from "../data";
// import type { Route } from "./+types/destroy-post";

// export async function clientAction({ params }: Route.ClientActionArgs) {
//   await deletePost(params.postId);
//   return redirect("/");
// }

// export default function DestroyPost() {
//   // This component can remain empty as the action handles the redirection
//   return null;
// }
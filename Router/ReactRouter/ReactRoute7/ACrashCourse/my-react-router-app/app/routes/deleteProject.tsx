// // app/routes/deleteProject.tsx
// import { redirect } from "react-router";
// import type { Route } from "./+types/project";

// export async function action({ params }: Route.ActionArgs) {
//   const res = await fetch(`/api/projects/${params.projectId}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Response("Failed to delete project.", { status: 500 });
//   }

//   return redirect("/projects");
// }

// export default function DeleteProject() {
//   // This component can remain empty as the action handles the redirection
//   return null;
// }
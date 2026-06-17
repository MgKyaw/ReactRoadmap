// // app/routes/updateProject.tsx
// import { Form, redirect } from "react-router";
// import type { Route } from "./+types/project";

// export async function clientAction({ request }: Route.ClientActionArgs) {
//   const formData = await request.formData();
//   const title = formData.get("title");

//   const res = await fetch(`/api/projects/${formData.get("projectId")}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title }),
//   });

//   if (!res.ok) {
//     return { success: false, message: "Failed to update project." };
//   }

//   return { success: true };
// }

// export default function UpdateProject({ loaderData }: Route.ComponentProps) {
//   return (
//     <Form method="post">
//       <input type="hidden" name="projectId" value={loaderData.id} />
//       <label>
//         Project Title:
//         <input type="text" name="title" defaultValue={loaderData.title} />
//       </label>
//       <button type="submit">Update</button>
//     </Form>
//   );
// }
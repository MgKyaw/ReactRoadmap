// // app/routes/product.tsx
// import type { Route } from "./+types/product";

// export async function loader({ params }: Route.LoaderArgs) {
//   const res = await fetch(`/api/products/${params.pid}`);
//   if (!res.ok) throw new Response("Not Found", { status: 404 });
//   return res.json();
// }

// export default function Product({ loaderData }: Route.ComponentProps) {
//   const { name, description } = loaderData;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }
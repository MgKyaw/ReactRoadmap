// // app/routes/clientProduct.tsx
// import type { Route } from "./+types/product";

// export async function clientLoader({ params }: Route.ClientLoaderArgs) {
//   const res = await fetch(`/api/products/${params.pid}`);
//   return res.json();
// }

// export default function ClientProduct({ loaderData }: Route.ComponentProps) {
//   const { name, description } = loaderData;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }
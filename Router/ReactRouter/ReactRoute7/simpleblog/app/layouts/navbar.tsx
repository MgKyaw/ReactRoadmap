// // app/layouts/navbar.tsx
// import {
//   Form,
//   Link,
//   Outlet,
//   useNavigation,
//   useSubmit,
//   useEffect,
// } from "react-router";
// import { getPosts, createEmptyPost } from "../data";
// import type { Route } from "./+types/navbar";

// export async function clientLoader() {
//   const posts = await getPosts();
//   return { posts };
// }

// export async function clientAction() {
//   const post = await createEmptyPost();
//   return { isCreated: true };
// }

// export default function NavbarLayout({ loaderData }: Route.ComponentProps) {
//   const { isCreated } = loaderData;
//   const navigation = useNavigation();
//   const submit = useSubmit();

//   return (
//     <>
//       <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
//         <Link to="/" className="text-xl font-bold hover:text-gray-300">
//           Posts Manager
//         </Link>
//         <nav className="flex items-center gap-4">
//           <Form method="post">
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-500 transition px-3 py-1 rounded text-white"
//             >
//               New
//             </button>
//           </Form>
//         </nav>
//       </header>
//       <main className="p-4">
//         <Outlet context={loaderData} />
//       </main>
//     </>
//   );
// }

// app/routes/home.tsx
import { Form, useOutletContext } from "react-router";

type LoaderData = {
  posts: Array<{ id: number; title: string }>;
};

export default function Home() {
  const { posts } = useOutletContext<LoaderData>();

  if (!posts.length) {
    return (
      <p className="text-gray-700">
        <i>No posts</i>
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {posts.map((post) => (
        <li
          key={post.id}
          className="flex items-center justify-between border border-gray-200 p-2 rounded"
        >
          <span className="font-medium">{post.title || <i>No Title</i>}</span>
          <Form method="post" action={`posts/${post.id}/destroy`}>
            <button
              type="submit"
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 transition"
              onClick={(e) => {
                const response = confirm(
                  "Are you sure you want to delete this post?"
                );
                if (!response) e.preventDefault();
              }}
            >
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
}
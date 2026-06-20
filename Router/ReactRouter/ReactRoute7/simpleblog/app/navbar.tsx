// app/layouts/navbar.tsx
import {
  Form,
  Link,
  Outlet,
  useNavigation,
  useSubmit,
  useEffect,
} from "react-router";
import { getPosts, createEmptyPost } from "../data";
import type { Route } from "./+types/navbar";

export async function clientLoader() {
  const posts = await getPosts();
  return { posts };
}

export async function clientAction() {
  const post = await createEmptyPost();
  return { isCreated: true };
}

export default function NavbarLayout({ loaderData }: Route.ComponentProps) {
  const { isCreated } = loaderData;
  const navigation = useNavigation();
  const submit = useSubmit();

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          Posts Manager
        </Link>
        <nav className="flex items-center gap-4">
          <Form method="post">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 transition px-3 py-1 rounded text-white"
            >
              New
            </button>
          </Form>
        </nav>
      </header>
      <main className="p-4">
        <Outlet context={loaderData} />
      </main>
    </>
  );
}
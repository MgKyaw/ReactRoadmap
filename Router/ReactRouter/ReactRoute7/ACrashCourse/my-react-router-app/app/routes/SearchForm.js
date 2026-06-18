import { Form } from "react-router";

export function SearchForm() {
  return (
    <Form method="get" action="/search">
      <input type="text" name="q" placeholder="Search..." />
      <button type="submit">Search</button>
    </Form>
  );
}
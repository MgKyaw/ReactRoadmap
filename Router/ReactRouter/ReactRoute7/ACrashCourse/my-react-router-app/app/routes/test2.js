import { createRoutesStub } from "react-router";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PostList } from "./PostList";

test("PostList deletes a post", async () => {
  const Stub = createRoutesStub([
    {
      path: "/",
      Component: PostList,
      loader() {
        return {
          posts: [
            { id: 1, title: "First Post" },
            { id: 2, title: "Second Post" },
          ],
        };
      },
      action({ params }) {
        if (params.postId === "1") {
          return { isDeleted: true };
        }
        return { isDeleted: false };
      },
    },
  ]);

  render(<Stub initialEntries={["/"]} />);

  const deleteButtons = screen.getAllByText("Delete");

  userEvent.click(deleteButtons[0]);

  await waitFor(() => {
    expect(screen.queryByText("First Post")).not.toBeInTheDocument();
  });

  expect(screen.getByText("Second Post")).toBeInTheDocument();
});
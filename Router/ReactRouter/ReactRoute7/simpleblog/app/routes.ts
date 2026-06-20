// app/routes.ts
import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/navbar.tsx", {
    clientLoader: "layouts/navbar.tsx:clientLoader",
    clientAction: "layouts/navbar.tsx:clientAction",
    children: [
      index("routes/home.tsx"),
      route("posts/:postId/destroy", "routes/destroy-post.tsx", {
        clientAction: "routes/destroy-post.tsx:clientAction",
      }),
    ],
  }),
] satisfies RouteConfig;
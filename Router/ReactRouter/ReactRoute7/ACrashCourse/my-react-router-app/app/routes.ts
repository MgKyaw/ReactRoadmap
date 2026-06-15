// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

// Basic Route Configuration

// import { type RouteConfig, route } from "@react-router/dev/routes";

// export default [
//   route("some/path", "./some/file.tsx"),
//   // pattern ^           ^ module file
// ] satisfies RouteConfig;

// Advance Route Configuration

import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./home.tsx"),
  route("about", "./about.tsx"),

  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),

  ...prefix("concerts", [
    index("./concerts/home.tsx"),
    route(":city", "./concerts/city.tsx"),
    route("trending", "./concerts/trending.tsx"),
  ]),
] satisfies RouteConfig;
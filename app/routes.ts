import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("events", "routes/events.tsx"),
  route("events/:id", "routes/events.$id.tsx"),
  route("about", "routes/about.tsx"),
  route("execs", "routes/execs.tsx"),
] satisfies RouteConfig;

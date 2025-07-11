import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("events", "routes/events.tsx"),
  route("events/:id", "routes/events.$id.tsx"),
  route("recipes", "routes/recipes.tsx"),
  route("recipes/:id", "routes/recipes.$id.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;

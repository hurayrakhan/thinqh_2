// routes.ts
import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  // Home page at "/"
  index("./routes/home.tsx"),

  // Auth layout at "/auth"
  layout("./routes/auth/layout.tsx", [
    route("login", "./routes/auth/login.tsx"),
    route("register", "./routes/auth/register.tsx")
  ]),
] satisfies RouteConfig;

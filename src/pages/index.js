import { lazy } from "react";

export const Home = lazy(() => import("./Home")),
  AllTodo = lazy(() => import("./AllTodo"));

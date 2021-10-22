import { lazy } from "react";

export const Header = lazy(() => import("./Header")),
  AddTodoForm = lazy(() => import("./AddTodoForm")),
  EditTodoModal = lazy(() => import("./EditTodoModal")),
  TodoList = lazy(() => import("./TodoList"));

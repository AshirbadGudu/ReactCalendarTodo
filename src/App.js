import "./App.css";
import { Loader } from "components/core";
import { Suspense } from "react";
import { AppContextProvider } from "./AppContext";
import Router from "./Router";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </Suspense>
  );
}

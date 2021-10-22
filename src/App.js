import "./App.css";
import { Loader } from "components/core";
import { Suspense } from "react";
import { AppContextProvider } from "./AppContext";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AppContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppContextProvider>
    </Suspense>
  );
}

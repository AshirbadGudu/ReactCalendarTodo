import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "AppContext";
import { Loader } from "components/core";
import Router from "Router";

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

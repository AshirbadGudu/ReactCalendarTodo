import "./App.css";
import { AppContextProvider } from "./AppContext";
import Router from "./Router";

export default function App() {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

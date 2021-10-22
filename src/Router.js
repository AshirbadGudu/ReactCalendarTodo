import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AllTodo, Home } from "pages";
import Header from "./components/Header";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/AllTodo" component={AllTodo} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

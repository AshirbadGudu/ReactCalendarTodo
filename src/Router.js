import { Switch, Route } from "react-router-dom";
import { AllTodo, Home } from "pages";
import withLayout from "layouts";
const Router = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/AllTodo" component={AllTodo} exact />
    </Switch>
  );
};

export default withLayout(Router);

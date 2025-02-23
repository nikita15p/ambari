import { Switch, Route } from "react-router-dom";
import routes from "./RoutesList.tsx";

export default function Routes() {
  return (
    <Switch>
      {routes.map(({ path, Element }, key) => (
        <Route path={path} key={key} render={() => <Element />}></Route>
      ))}
    </Switch>
  );
}
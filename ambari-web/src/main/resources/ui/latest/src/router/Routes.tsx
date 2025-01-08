import { Routes, Route } from "react-router-dom";
import routes from "./RoutesList.js";

export default function Routes() {
  return (
    <Routes>
      {routes.map(({ path, Element }, key) => (
        <Route path={path} key={key} element={<Element />}></Route>
      ))}
    </Routes>
  );
}
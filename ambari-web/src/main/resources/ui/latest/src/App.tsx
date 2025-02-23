import Routes from "./router/Routes";
import { HashRouter } from "react-router-dom";
import NavBar from "./layout/NavBar";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <h1>Welcome to Your React + TypeScript App!</h1>
        <p>Edit <code>App.tsx</code> and save to reload.</p>
        <NavBar
              subPath={"SubPath"}
              clusterName={""}
            />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
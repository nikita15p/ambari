import Routes from "./router/Routes";
import { HashRouter } from "react-router-dom";

function App() {
  console.log("App.tsx: React");
  return (
    <HashRouter>
      <div className="App">
        <h1>Welcome to Your React + TypeScript App!</h1>
        <p>Edit <code>App.tsx</code> and save to reload.</p>
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
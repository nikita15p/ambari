import Routes from "./router/Routes";

import { Container, Card } from "react-bootstrap";
import { useState } from "react";
import NavBar from "./layout/NavBar";
import AppContent from "./context/AppContext";
import { Toaster } from "react-hot-toast";
import { HashRouter } from "react-router-dom";


function App() {
  
  const [rbacData, setRbacData] = useState({});
  const [ambariVersion, setAmbariVersion] = useState<string>("");
  const [permissionLabelList, setPermissionLabelList] = useState<string[]>([]);
  const selectedOption = "Dashboard";

  console.log("In App");
  return (
    <HashRouter>
      <AppContent.Provider
        value={{
          rbacData,
          setRbacData,
          permissionLabelList,
          setPermissionLabelList,
          ambariVersion,
          setAmbariVersion,
        }}
      >
        <Toaster />
        <div className="d-flex h-100" style={{ maxHeight: "100vh" }}>
            <NavBar
              subPath={"None"}
              clusterName={""}
            />
            <Container className="mt-4">
              <Card className="p-4 rounded-0">
                <Routes />
              </Card>
            </Container>
          </div>
      </AppContent.Provider>
    </HashRouter>
  );
}
export default App;
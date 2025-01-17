import { LoginApi } from "../../api/LoginApi";
import { useEffect } from "react";

export const Login = () => {

  useEffect(() => {
    LoginApi.login();
  }, []);
  
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};
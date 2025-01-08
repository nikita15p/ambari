import { LoginApi } from "../../api/LoginApi";

export const Login = () => {
  return (
    <div>
      <button onClick={LoginApi.login}>Login</button>
    </div>
  );
};
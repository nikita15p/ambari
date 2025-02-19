// import { Login } from "../screens/Authentication/Login";

export default [

    // {
    //     path: "/login",
    //     exact: true,
    //     Element: () => <Login/>,
    // },
    {
        path: "/",
        exact: true,
        Element: () => <h1>Ambari Web</h1>,
        name: "Home",
    },
]
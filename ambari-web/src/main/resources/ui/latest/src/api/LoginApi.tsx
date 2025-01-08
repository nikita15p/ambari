
import { webApi } from "./configs/axiosConfig";

function encodeCredentials(username: any, password: any) {
    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials); 
    console.log(encodedCredentials); 
    return encodedCredentials;
  }

export const LoginApi = {
    login: () => {
        const encodedCredentials = encodeCredentials("admin", "admin");
        const headers = {   
            "Authorization": `Basic ${encodedCredentials}`,
            'Content-Type': 'text/plain',
        }
        webApi.post("/login", {}, { headers });
}
}

import { webApi } from "./configs/axiosConfig";

function encodeCredentials(username: any, password: any) {
    const credentials = `${username}:${password}`;
    const encodedCredentials = btoa(credentials); 
    console.log("encodedCredentials", encodedCredentials); 
    return encodedCredentials;
  }

export const LoginApi = {

    login: async () => {
        try {
        const encodedCredentials = encodeCredentials("admin", "admin");
        const headers = {   
            "Authorization": `Basic ${encodedCredentials}`,
            'Content-Type': 'text/plain',
            'X-Requested-By': 'ambari' 
        }
             const response = await webApi.post("/auth", {}, { headers });
            return response.data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
};
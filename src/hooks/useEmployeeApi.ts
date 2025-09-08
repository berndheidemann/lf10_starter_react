// hooks/useEmployeeApi.ts
import {useAuth} from "react-oidc-context";

export function useEmployeeApi() {
    const auth = useAuth();

    const fetchEmployees = async () => {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };

        if (auth.user?.access_token) {
            headers['Authorization'] = `Bearer ${auth.user.access_token}`;
        }

        console.log('Fetching employees with headers:', headers);
        console.log("Fetch URL: http://localhost:8089/employees");

        const response = await fetch('http://localhost:8089/employees', {headers});
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    };

    return {fetchEmployees};
}
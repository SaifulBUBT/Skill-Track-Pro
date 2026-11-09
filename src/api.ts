interface NetworkUser {
    id: number;
    first_name: string;
    email_address: string;
}

interface CleanUser {
    id: number;
    name: string;
    email: string;
}

class ApiClient<T, R=T> {
    constructor(private baseUrl: string) {}

    async fetchData(endpoint: string, transformer?: (data: T) => R): Promise<R> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const rawData: T = await response.json();
            if (transformer) {
                return transformer(rawData);
            }
            return rawData as unknown as R;
            
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }
}

async function executeSync() {
    const simpleClient = new ApiClient<NetworkUser>("https://jsonplaceholder.typicode.com");
    const networkUser = await simpleClient.fetchData("/users/2");
    console.log("Network User: ", networkUser);

    const userClient = new ApiClient<NetworkUser, CleanUser>("https://jsonplaceholder.typicode.com");
    const cleanUser = await userClient.fetchData("/users/2", (data) => ({
        id: data.id,
        name: data.first_name,
        email: data.email_address
    }));
    console.log("Clean User: ", cleanUser);
}

executeSync();
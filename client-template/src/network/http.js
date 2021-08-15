export default class HttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL
    }

    async fetch(url, options) {
        const response = await fetch(`${this.baseURL}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
        let data;
        try {
            data = await response.json();
        } catch (error) { 
            console.error(error);
        }

        if(response.status >= 300 || response.status < 200) {
            const message = data && data.message ? data.message : 'Something went wrong!';
            const error = new Error(message);
            if (response.status === 401) {
                this.authErrorEventBus.notify(error);
                return;
            }
        }
        return data;
    }
}
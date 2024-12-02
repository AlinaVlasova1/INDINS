const baseUrl = `https://fakestoreapi.com/`;

export class ApiUrlFactory {
    static create(pathname: string) : URL {
        const requestUrl = new URL(baseUrl);
        requestUrl.pathname += pathname;
        return requestUrl;
    }
}
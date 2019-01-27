interface Server {
    listen(port: number, callback: () => void): void;
    useRouter(router: any): void;
}
export declare class ApplicationServer implements Server {
    private readonly server;
    constructor(server?: import("express-serve-static-core").Express);
    useRouter(router: any): void;
    listen(port: number, callback: () => void): void;
}
export {};

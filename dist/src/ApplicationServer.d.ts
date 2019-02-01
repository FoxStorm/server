interface Server {
    listen(port: number, callback: () => void): void;
    useRouter(router: any): void;
}
export declare class ApplicationServer implements Server {
    private readonly server;
    constructor(server?: any);
    useRouter(router: any): void;
    listen(port: number, callback: () => void): void;
}
export {};

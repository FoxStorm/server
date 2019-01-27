export interface Server {
    listen(port: number, callback: () => void): void;
    useRouter(router: any): void;
}
export declare class ApplicationServer implements Server {
    readonly server: import("express-serve-static-core").Express;
    constructor(server?: import("express-serve-static-core").Express);
    useRouter(router: any): void;
    listen(port: number, callback: () => void): void;
}

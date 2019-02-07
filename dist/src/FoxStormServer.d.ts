export interface Serving {
    listen(port: number, callback?: () => void): void;
    useRouter(router: any): void;
    setViewEngine(templateEngine: string): void;
}
export declare class FoxStormServer implements Serving {
    private readonly server;
    constructor(server?: any);
    listen(port: number, callback?: () => void): void;
    useRouter(router: any): void;
    setViewEngine(templateEngine: string): void;
}

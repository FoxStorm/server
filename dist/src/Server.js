"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(server = express()) {
        this.server = server;
    }
    useRouter(router) {
        this.server.use(router);
    }
    listen(port, callback) {
        this.server.listen(port, callback);
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map
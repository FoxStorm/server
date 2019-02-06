"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class ApplicationServer {
    constructor(server = express()) {
        this.server = server;
    }
    useRouter(router) {
        this.server.use(router);
    }
    listen(port, callback) {
        this.server.listen(port, callback);
    }
    setViewEngine(templateEngine) {
        this.server.set('view engine', templateEngine);
    }
}
exports.ApplicationServer = ApplicationServer;
//# sourceMappingURL=ApplicationServer.js.map
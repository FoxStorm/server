"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class FoxStormServer {
    constructor(server = express()) {
        this.server = server;
    }
    listen(port, callback) {
        this.server.listen(port, callback);
    }
    useRouter(router) {
        this.server.use(router);
    }
    setViewEngine(templateEngine) {
        this.server.set('view engine', templateEngine);
    }
}
exports.FoxStormServer = FoxStormServer;
//# sourceMappingURL=FoxStormServer.js.map
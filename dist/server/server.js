"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const paths_1 = require("./paths");
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        dotenv_1.default.config();
        this.app = (0, express_1.default)();
        //@ts-ignore
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.mongoConnection();
        this.middlewares();
        this.routes();
    }
    mongoConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, connection_1.default)();
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(paths_1.apiUrl.home, paths_1.apiRoute.home);
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log("We are online in the port: ", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map
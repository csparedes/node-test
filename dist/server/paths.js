"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoute = exports.apiUrl = void 0;
const home_1 = __importDefault(require("../routes/home"));
exports.apiUrl = {
    home: "/api/home",
};
exports.apiRoute = {
    home: home_1.default,
};
//# sourceMappingURL=paths.js.map
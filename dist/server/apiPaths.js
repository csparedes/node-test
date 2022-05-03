"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrl = exports.apiPath = void 0;
const home_1 = __importDefault(require("../routes/home"));
exports.apiPath = {
    "home": home_1.default
};
exports.apiUrl = {
    "home": "/api/home"
};
//# sourceMappingURL=apiPaths.js.map
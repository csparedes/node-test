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
exports.deleteHome = exports.putHome = exports.postHome = exports.getHome = exports.getHomes = void 0;
const home_1 = __importDefault(require("../models/home"));
const getHomes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const homes = yield home_1.default.find({});
    res.json({
        homes,
        msg: "Ok"
    });
});
exports.getHomes = getHomes;
const getHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const home = yield home_1.default.findById(id);
    res.json({
        home,
        msg: "Ok"
    });
});
exports.getHome = getHome;
const postHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const home = new home_1.default(body);
    yield home.save();
    res.json({
        home,
        msg: "Ok"
    });
});
exports.postHome = postHome;
const putHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const home = yield home_1.default.findByIdAndUpdate(id, body, {
        new: true
    });
    res.json({
        home,
        msg: "Ok"
    });
});
exports.putHome = putHome;
const deleteHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const home = yield home_1.default.findByIdAndUpdate(id, { isActive: false }, {
        new: true
    });
    res.json({
        home,
        msg: "Ok"
    });
});
exports.deleteHome = deleteHome;
//# sourceMappingURL=home.js.map
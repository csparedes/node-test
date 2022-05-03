"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = require("../controllers/home");
const router = (0, express_1.Router)();
router.get("/", home_1.getHomes);
router.get("/:id", home_1.getHome);
router.post("/", home_1.postHome);
router.put("/:id", home_1.putHome);
router.delete("/:id", home_1.deleteHome);
exports.default = router;
//# sourceMappingURL=home.js.map
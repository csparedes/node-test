import { Router } from "express";
import { deleteHome, getHome, getHomes, postHome, putHome } from "../controllers/home";
const router = Router();
router.get("/", getHomes);
router.get("/:id", getHome);
router.post("/", postHome);
router.put("/:id", putHome);
router.delete("/:id", deleteHome);
export default router;
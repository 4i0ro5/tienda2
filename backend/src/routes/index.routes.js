import {Router} from "express"
import { indexPong, indexPrin } from "../controllers/index.controllers.js";

const router= Router();

router.get("/", indexPrin)
router.get("/ping", indexPong)

export default router
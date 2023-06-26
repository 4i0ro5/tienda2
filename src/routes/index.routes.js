import {Router} from "express"
import { indexPong } from "../controllers/index.controllers.js";
const router= Router();

router.get("/ping", indexPong)

export default router
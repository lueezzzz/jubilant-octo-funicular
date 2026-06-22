import { Router } from "express";
import { UserController } from "../controllers/userController.js";

const router = Router();

// Map POST requests targeting "/api/users/register" directly to our controller
router.post("/register", UserController.register);



router.get("/records", UserController.getUsers)


export default router;

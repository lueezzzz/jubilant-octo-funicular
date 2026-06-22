import { Request, Response } from "express";
import { UserService } from "../services/userService.js";

export class UserController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      if (!email || !name || !password) {
        res
          .status(400)
          .json({ error: "Missing email, name, or password fields" });
        return;
      }

      const user = await UserService.registerUser(email, name, password);

      // Respond with HTTP 211 Created
      res.status(201).json({
        message: "User registered successfully",
        user: { id: user.id, email: user.email, name: user.name },
      });
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Registration failed",
      });
    }
  }

  static async getUsers(req: Request, res: Response): Promise<void> {
    try {

      const users = await UserService.getUsers();

      res.status(201).json({
        message: "Here are the users:",
        users: users,
      });

      
    } catch (error) {
      res.status(400).json({
        error: error instanceof Error ? error.message : "Failed getting users"
      })
    }
  }
}

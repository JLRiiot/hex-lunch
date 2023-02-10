import { Application, Router } from "express";
import { UsersService } from "../../domain/ports/users-service";

export const loadUsersService = async (app: Application) => {
  const router = Router();
  let service!: UsersService;

  router.get("/users/:id", async (req, res) => {
    try {
      const data = await service.find(req.params.id);

      res.status(200).json(data);
    } catch (error) {}
  });
};

import { UserModel } from "../../domain/models/user";
import { IUsersRepository } from "../../domain/ports/users-respository";

export class UsersRepository implements IUsersRepository {
  create(user: UserModel): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  update(user: Partial<UserModel>): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
  delete(user: UserModel): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<UserModel> {
    throw new Error("Method not implemented.");
  }
}

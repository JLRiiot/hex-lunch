import { UserModel } from "../models/user";

export interface IUsersRepository {
  create(user: UserModel): Promise<UserModel>;
  update(user: Partial<UserModel>): Promise<UserModel>;
  delete(user: UserModel): Promise<void>;
  find(id: string): Promise<UserModel>;
}

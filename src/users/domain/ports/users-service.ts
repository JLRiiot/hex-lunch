import { User, UserModel, UserModelBuilder } from "../models/user";
import { IPasswordStrengthChecker } from "./password-strength-checker";
import { IUsersRepository } from "./users-respository";

export class UsersService {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordStrengthChecker: IPasswordStrengthChecker
  ) {}

  create(user: User): Promise<UserModel> {
    const userModel = UserModelBuilder.builder()
      .withName(user.name)
      .withAddress(user.address)
      .withPassword(user.password)
      .build();

    const isPasswordStrong = this.passwordStrengthChecker.isStrong(
      user.password
    );

    if (!isPasswordStrong) {
      throw new Error("Password is not strong enough");
    }

    return this.usersRepository.create(userModel);
  }

  update(user: User): Promise<UserModel> {
    const userModel = UserModelBuilder.builder()
      .withName(user.name)
      .withAddress(user.address)
      .build();

    return this.usersRepository.update(userModel);
  }

  delete(user: UserModel): Promise<void> {
    return this.usersRepository.delete(user);
  }

  find(id: string): Promise<UserModel> {
    return this.usersRepository.find(id);
  }
}

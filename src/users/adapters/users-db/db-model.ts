import { Address, User, UserModel } from "../../domain/models/user";

export type UserDbModel = User & {
  updatedAt: Date;
};

export class UserDbModelBuilder {
  private partialUser: Partial<UserDbModel> = {};

  withId(id: string): UserDbModelBuilder {
    this.partialUser.id = id;
    return this;
  }
  withName(name: string): UserDbModelBuilder {
    this.partialUser.name = name;
    return this;
  }
  withAddress(address: Address): UserDbModelBuilder {
    this.partialUser.address = address;
    return this;
  }
  withPassword(password: string): UserDbModelBuilder {
    this.partialUser.password = password;
    return this;
  }

  build(): UserDbModel {
    return {
      ...this.partialUser,
      updatedAt: new Date(),
    } as UserDbModel;
  }

  static fromModel(model: UserModel): UserDbModel {
    const builder = new UserDbModelBuilder();
    builder.withId(model.user.id);
    builder.withName(model.user.name);
    builder.withAddress(model.user.address);

    return builder.build();
  }

  static toDomainModel(user: UserDbModel): UserModel {
    return new UserModel({
      id: user.id,
      name: user.name,
      address: user.address,
      password: user.password,
    });
  }
}

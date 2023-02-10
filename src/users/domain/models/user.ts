export type User = {
  id: string;
  name: string;
  password: string;
  address: Address;
};

export type Address = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export class UserModel {
  get user(): User {
    return this._user;
  }

  constructor(private _user: User) {}

  update(args: Partial<Omit<User, "id">>) {
    this._user = { ...this.user, ...args };
  }
}

export class UserModelBuilder {
  private id!: string;
  private name!: string;
  private password!: string;
  private address!: Address;

  withId(id: string): UserModelBuilder {
    this.id = id;
    return this;
  }

  withName(name: string): UserModelBuilder {
    this.name = name;
    return this;
  }

  withPassword(password: string): UserModelBuilder {
    this.password = password;
    return this;
  }

  withAddress(address: Address): UserModelBuilder {
    this.address = address;
    return this;
  }

  build(): UserModel {
    return new UserModel({
      id: this.id,
      name: this.name,
      password: this.password,
      address: this.address,
    });
  }

  static builder(): UserModelBuilder {
    return new UserModelBuilder();
  }
}

export class User {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  phone?: number;

  constructor(partial: Partial<User> = {}) {
    Object.assign(this, partial);
  }
}

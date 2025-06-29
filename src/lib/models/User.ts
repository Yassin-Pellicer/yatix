export class User {
  id?: string;
  email?: string;
  password?: string;
  name?: string;
  phone?: number;

  constructor(partial: Partial<User> = {}) {
    Object.assign(this, partial);
  }
}

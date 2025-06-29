export class Promoter {
  id?: string;
  email?: string;
  password?: string;
  name?: string;
  phone?: number;
  events?: Event[];

  constructor(data: Partial<Promoter>) {
    Object.assign(this, data);
  }
}

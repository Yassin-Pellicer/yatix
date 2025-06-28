export class Promoter {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  phone?: number;
  created_events?: Event[];

  constructor(data: Partial<Promoter>) {
    Object.assign(this, data);
  }
}

import { Promoter } from "./Promoter";

export class Event {
  id?: string;
  title?: string;
  location?: string;
  date?: Date;
  capacity?: number;
  promoter?: Promoter;
  promoterId?: number;

  constructor(partial: Partial<Event> = {}) {
    Object.assign(this, partial);
  }
}


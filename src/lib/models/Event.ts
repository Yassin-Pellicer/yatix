import { Promoter } from "./Promoter";

export class Event {
  id?: number;
  title?: string;
  location?: string;
  date?: Date;
  capacity?: number;
  promoter?: Promoter;
  promoter_id?: number;

  constructor(partial: Partial<Event> = {}) {
    Object.assign(this, partial);
  }
}


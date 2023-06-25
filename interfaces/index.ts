export interface IFAQ {
  question: string;
  answer: string;
}
export enum UserType {
  USER = "user",
  ADMIN = "admin",
}

export enum PaymentMethodType {
  BANK = "bank",
  CARD = "card",
  TRANSFER = "transfer",
}

export enum DeviceType {
  Android = "android",
  IPhone = "iphone",
  Web = "web",
}

export interface IPromotionData {
  id: number;
  name: string;
  description: string;
  logo?: string;
  photo?: string;
  promotion_expiry: string;
  end_date?: string;
  start_date?: string;
}
export interface ITicketData {
  id: number;
  event_id: number;
  user_id: number;
  type: string;
  description: string;
  price: number;
  currency: string;
  deleted_at: null;
  created_at: string;
  updated_at: string;
}

export interface IPurchasedTicketData extends ITicketData {
  amount_paid: number;
  reference: string;
}

export interface ITicketOptions {
  amount: number;
  selected: boolean;
  quantity: number;
}
export interface ITicketOptionsMap {
  [id: string]: ITicketOptions;
}

export enum LoadingType {
  FULLSCREEN = "fullscreen",
  INLINE = "inline",
  TEXT = "text",
}

export interface IMealData {
  id: 5;
  event_id: 4;
  menu_id: 3;
  name: string;
  description: string;
  available: 1;
  price: 20;
  created_at: string;
  updated_at: string;
}

export interface IEventData {
  id: string;
  reference: string;
  name: string;
  description: string;
  theme: string;
  photo: string;
  type: string;
  venue: string;
  address: string;
  service_number: string;
  currency: string;
  capacity: string;
  start_date: string;
  end_date?: string;
  start_time: string;
  end_time?: string;
  tickets: ITicketData[];
  purchased_tickets: IPurchasedTicketData[];
  total_purchased_ticket_count: number;
  affliates: {
    id: number;
    event_id: number;
    uuid: string;
    commission: number;
    created_at: string;
  }[];
}

export interface IBlogData {
  id: number;
  name: string;
  body: string;
  photo: string;
  created_at: string;
  updated_at: string;
}

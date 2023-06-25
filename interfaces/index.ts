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

export interface IBucketData {
  _id: string;
  name: string;
  description: string;
  submissionsCount: number;
}

export interface ISubmissionData {
  _id: string;
  name: string;
  description: string;
  submissionsCount: number;
}

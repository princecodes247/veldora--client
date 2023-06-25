import { HttpStatusCode } from "axios";
import { DeviceType, IBucketData } from ".";

export interface IAuthData {
  email: string;
  password: string;
  device_name: DeviceType;
}

export interface IRegistrationData extends IAuthData {
  name: string;
  password_confirmation: string;
  phone_number: string;
}

export interface OTPVerificationData {
  email: string;
  otp: string;
}

export interface IWallet {
  currency: "USD";
  amount: 0;
}

export interface IUserData {
  email: string;
  password: string;
  name?: string;
  uuid?: string;
  id?: number;
  image?: string | null;
  phone_number?: string | null;
  wallets?: IWallet[];
  business?: string | null;
  ip?: string | null;
  lat?: string | null;
  lng?: string | null;
  current_country_location?: string | null;
  timezone?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  isVerified: 0 | 1;
  userType: "user" | "admin";
}

export interface ResponseBody<T> {
  status: HttpStatusCode;
  message: string;
  data: T;
}

export interface GetBucketsData extends ResponseBody<IBucketData[]> {}

// links: {
//   first: "string";
//   last: "string";
//   prev: number | null;
//   next: number | null;
// };
// meta: {
//   current_page: number | null;
//   from: number | null;
//   last_page: number | null;
//   links: {
//     url: string | null;
//     label: string | null;
//     active: boolean;
//   }[];
//   path: string;
//   per_page: number;
//   to: number;
//   total: number;
// };

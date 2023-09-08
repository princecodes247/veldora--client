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
  userID: string;
  email: string;
  phone?: string;
  metadata: { username: string; theme: "light" | "dark" };
}

export interface ResponseBody<T> {
  status: HttpStatusCode;
  message: string;
  data: T;
}
export interface PaginationMeta {
  meta: {
    total: number;
    page: number;
    limit: number;
    pages: number;
    hasNextPage: boolean;
    nextPage: number;
  };
}

export interface PaginatedResponse<T>
  extends ResponseBody<
    {
      result: T[];
    } & PaginationMeta
  > {}

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

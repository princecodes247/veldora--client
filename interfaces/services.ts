import { DeviceType, IEventData } from ".";

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

export type ResponseData = {
  status: number;
  message: "success" | "error";
};

export interface GetEventsData extends ResponseData {
  data: {
    data: IEventData[];
    links: {
      first: "string";
      last: "string";
      prev: number | null;
      next: number | null;
    };
    meta: {
      current_page: number | null;
      from: number | null;
      last_page: number | null;
      links: {
        url: string | null;
        label: string | null;
        active: boolean;
      }[];
      path: string;
      per_page: number;
      to: number;
      total: number;
    };
  };
}

export interface GetClientSecretData extends ResponseData {
  data: {
    id: string;
    paymentIntent: string;
    ephemeralKey: string;
    customer: string;
    publishableKey: string;
  };
}

export interface GetPurchasedTicketsData extends ResponseData {
  data: [
    {
      id: number;
      reference: string;
      used: number;
      event: {
        id: number;
        reference?: string;
        service_number: string;
        user_id: number;
        name: string;
        photo: string;
        type: string;
        description: string;
        venue: string;
        address: string;
        number_of_guest: number;
        theme: string;
        start_time: string | null;
        end_time: string | null;
        start_date: string | null;
        end_date: string | null;
        promotion: number;
        order_status: number;
        promotion_expiry: null;
        capacity: string;
        currency: string;
        zip: string;
        country: string;
        deleted_at: string | null;
        created_at: string;
        updated_at: string;
      };
      ticket: {
        id: number;
        event_id: number;
        user_id: number;
        type: string;
        description: string;
        price: number;
        currency: string;
        deleted_at: string | null;
        created_at: string;
        updated_at: string;
      };
      created_at: string;
    },
  ];
}

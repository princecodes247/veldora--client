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
  responseStyle?: "default" | "json" | "params" | "custom"
  customRedirect?: string
  accessToken: string;
  views: {
    country: string;
    device: string;
    countryCode: string;
    isp: string;
    ip: string;
    platform: string;
  }[];
}

export interface IBucketDataWithStats extends IBucketData {
  stats: {
    countries: [];
    devices: [];
    submissionCount: 3;
    dailySubmissions: {
      count: number;
      date: string;
    }[];
  };
}

export interface ISubmissionData {
  _id: string;
  bucket: string;
  data: {
    [key: string]: any;
  };
}

export interface IAnimeQuote {
  body: string
  author: string;
}

export interface FeatureData {
    icon: any;
    title: string;
    description: string;
}
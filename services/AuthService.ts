import { IAuthData } from "./../interfaces/services";
import api from "./config";

const servicePrefix = "";

export const signIn = (data: IAuthData) => {
  return api.post(servicePrefix + "/login", data);
};

export const signOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  return true;
};

export const signUp = (data: IAuthData) => {
  return api.post("/register", data);
};

// export const resendEmailVerification = (data: IEmailVerificationData) => {
//   return api.post("/api/resend/verification/link", data);
// };

export const forgotPassword = (data: { email: string }) => {
  return api.post("/forgot/password", data);
};

export const verifyPasswordReset = (data: { code: string; email: string }) => {
  return api.post("/reset/password/verify", data);
};

export const resetPassword = (data: {
  code: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  return api.post("/reset/password", data);
};

export const emailVerification = (data: { email: string; otp: string }) => {
  return api.post("/verification", data);
};

export const resendOTP = (data: { email: string }) => {
  return api.post("/resend/otp", data);
};

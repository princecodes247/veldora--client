import {
  IAuthData,
  IRegistrationData,
  ResponseBody,
} from "./../interfaces/services";
import api, { authHeaders } from "./config";

const servicePrefix = "/auth";

export const signIn = (data: IAuthData) => {
  return api.post(servicePrefix + "/login", data);
};

export const signOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  return true;
};

export const signUp = (data: IRegistrationData) => {
  return api.post(servicePrefix + "/register", data);
};

// export const resendEmailVerification = (data: IEmailVerificationData) => {
//   return api.post("/api/resend/verification/link", data);
// };

export const forgotPassword = (data: { email: string }) => {
  return api.post<
    ResponseBody<{
      id: string;
    }>
  >(servicePrefix + "/password/recover", data);
};

export const verifyPasswordReset = (data: { otp: string; id: string }) => {
  return api.post(servicePrefix + "/password/verify", data);
};

export const resetPassword = (data: {
  otp: string;
  id: string;
  password: string;
  passwordConfirmation: string;
}) => {
  return api.post(servicePrefix + "/password/reset", data);
};

export const emailVerification = (data: { email: string; otp: string }) => {
  return api.post(servicePrefix + "/verification", data);
};

export const resendOTP = (data: { email: string }) => {
  return api.post(servicePrefix + "/resend/otp", data);
};

export const verifyAuth = () => {
  return api.get<{ authStatus: string; identifier: string }>(`/users/me`, {
    headers: authHeaders({
      "Content-Type": undefined,
    }),
  });
};

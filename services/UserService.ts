import { IUserData, ResponseBody } from "../interfaces/services";
import api, { authHeaders, uninterceptedApi } from "./config";

const servicePrefix = "/users";

export const wakeUpCall = () => {
  return uninterceptedApi.get<IUserData>(servicePrefix);
};

export const getUser = (userRequired: boolean = true) => {
  if (userRequired) {
    return api.get<{ data: IUserData }>(servicePrefix + "/me", {
      headers: authHeaders(),
    });
  }
  return uninterceptedApi.get<{ data: IUserData }>(servicePrefix, {
    headers: authHeaders(),
  });
};

export const updateUser = (
  userData: Partial<{
    email: string;
    phone: string;
    username: string;
    // theme: string;
  }>,
) => {
  return api.patch(servicePrefix + "/me", userData, {
    headers: authHeaders(),
  });
};

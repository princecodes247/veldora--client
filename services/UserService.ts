import { IUserData, ResponseBody } from "../interfaces/services";
import api, { authHeaders, uninterceptedApi } from "./config";

const servicePrefix = "/users";

export const getUser = (userRequired: boolean = true) => {
  if (userRequired) {
    return api.get<IUserData>(servicePrefix + "/me", {
      headers: authHeaders(),
    });
  }
  return uninterceptedApi.get<IUserData>(servicePrefix, {
    headers: authHeaders(),
  });
};

export const updateUser = (userData: Partial<{
  "email": string;
  "phone": string;
  "user_metadata": Partial<{
    username: string;
    theme: string;
  }>
}>) => {
  return api.patch(
    servicePrefix + "/me",
    userData,
    {
      headers: authHeaders(),
    },
  );
};


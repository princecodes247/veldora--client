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

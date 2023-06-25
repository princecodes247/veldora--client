import { IUserData, ResponseBody } from "../interfaces/services";
import api, { authHeaders, uninterceptedApi } from "./config";

const servicePrefix = "/user";

export const getUser = (userRequired: boolean = true) => {
  if (userRequired) {
    return api.get<ResponseBody<IUserData>>(servicePrefix, {
      headers: authHeaders(),
    });
  }
  return uninterceptedApi.get<ResponseBody<IUserData>>(servicePrefix, {
    headers: authHeaders(),
  });
};

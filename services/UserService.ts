import { IUserData, ResponseData } from "../interfaces/services";
import api, { authHeaders, uninterceptedApi } from "./config";

const servicePrefix = "/user";

export const getUser = (userRequired: boolean = true) => {
  if (userRequired) {
    return api.get<
      ResponseData & {
        data: IUserData;
      }
    >(servicePrefix, {
      headers: authHeaders(),
    });
  }
  return uninterceptedApi.get<
    ResponseData & {
      data: IUserData;
    }
  >(servicePrefix, {
    headers: authHeaders(),
  });
};

export const getUserbyUUID = (uuid: string) => {
  return api.get<
    ResponseData & {
      data: { id: number; uuid: string; name: string; email: string };
    }
  >(servicePrefix + "/uuid/" + uuid, {
    headers: authHeaders(),
  });
};

export const getUserAffiliatedEvents = () => {
  return api.get(servicePrefix + "/affliates", {
    // return api.get<IEventData[]>("/event/", {
    headers: authHeaders(),
  });
};

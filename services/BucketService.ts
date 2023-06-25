import { AxiosResponse } from "axios";
import { GetEventsData, IUserData, ResponseData } from "../interfaces/services";
import api, { authHeaders } from "./config";
import { IEventData } from "@/interfaces";

const servicePrefix = "/website/events";

export const getBucket = (id: string) => {
  return api.get<
    ResponseData & {
      data: IEventData;
    }
  >("/event/single/" + id, {});
};
export const getUserBuckets = () => {
  return api.get("/event/", {
    // return api.get<IEventData[]>("/event/", {
    headers: authHeaders(),
  });
};

export const createBucket = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return api.post<
    ResponseData & {
      data: {
        event_id: number;
        uuid: string;
        commission: number;
        updated_at: string;
        created_at: string;
        id: 4;
      };
    }
  >(
    "/event/affliate/store/",
    {
      name,
      description,
    },
    {
      headers: authHeaders(),
    },
  );
};

export const deleteBucket = ({ id }: { id: number }) => {
  return api.post("/remove/event/affliate/" + id + "/", {});
};

export const getBuckets = ({
  name,
  page,
  pageSize,
}: Partial<{
  name: string;
  page: number;
  pageSize: number;
}>) => {
  return api.get<GetEventsData>(
    `/website/events?name=${name}&page=${page}&pageSize=${pageSize}`,
    {},
  );
};

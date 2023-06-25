import { AxiosResponse } from "axios";
import { GetEventsData, IUserData, ResponseData } from "../interfaces/services";
import api, { authHeaders } from "./config";
import { IEventData } from "@/interfaces";

const servicePrefix = "/buckets/";

export const getBucket = (id: string) => {
  return api.get<
    ResponseData & {
      data: IEventData;
    }
  >(servicePrefix + id, {});
};

export const getUserBuckets = ({
  name,
  page,
  pageSize,
}: Partial<{
  name: string;
  page: number;
  pageSize: number;
}>) => {
  return api.get<GetEventsData>(
    `${servicePrefix}?name=${name}&page=${page}&pageSize=${pageSize}`,
    {},
  );
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
    servicePrefix,
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
  return api.post(servicePrefix + "remove" + id + "/", {});
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
    `${servicePrefix}?name=${name}&page=${page}&pageSize=${pageSize}`,
    {},
  );
};

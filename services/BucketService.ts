import { AxiosResponse } from "axios";
import { PaginatedResponse, ResponseBody } from "../interfaces/services";
import api, { authHeaders } from "./config";
import {
  IBucketData,
  IBucketDataWithStats,
  ISubmissionData,
} from "@/interfaces";

const servicePrefix = "/buckets/";
const submissionsPrefix = "/submissions/";

export const getBucket = (id: string) => {
  return api.get<ResponseBody<IBucketDataWithStats>>(servicePrefix + id, {
    headers: authHeaders(),
  });
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
  return api.get<PaginatedResponse<IBucketData>>(
    `${servicePrefix}?name=${name}&page=${page}&pageSize=${pageSize}`,
    {
      headers: authHeaders(),
    },
  );
};
export const getSubmissions = ({
  id,
  page,
  pageSize,
}: Partial<{
  id: string;
  page?: number;
  pageSize?: number;
}>) => {
  return api.get<PaginatedResponse<ISubmissionData>>(
    `${submissionsPrefix}?bucket=${id}&page=${
      (page ?? 0) + 1
    }&limit=${pageSize}`,
    {
      headers: authHeaders(),
    },
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
    ResponseBody<{
      event_id: number;
      uuid: string;
      commission: number;
      updated_at: string;
      created_at: string;
      id: 4;
    }>
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

export const deleteBucket = ({ id }: { id: string }) => {
  return api.delete(servicePrefix + id + "/", {
    headers: authHeaders(),
  });
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
  return api.get<PaginatedResponse<IBucketData>>(
    `${servicePrefix}?name=${name}&page=${page}&pageSize=${pageSize}`,
    {
      headers: authHeaders(),
    },
  );
};

export const updateBucket = ({
  bucketData,
  id,
}: {
  id: string;
  bucketData: Partial<
    Pick<
      IBucketData,
      "customRedirect" | "description" | "name" | "responseStyle"
    >
  >;
}) => {
  return api.patch(servicePrefix + id, bucketData, {
    headers: authHeaders(),
  });
};

export const subscribeToNewsletter = (email: string) => {
  return api.post(servicePrefix + "649d9435224e46dbf5ea2d4f", {
    email,
  });
};

export const deleteSubmissions = ({ ids }: { ids: string[] }) => {
  return api.post(
    submissionsPrefix + "delete",
    {
      ids,
    },
    {
      headers: authHeaders(),
    },
  );
};

export const regenerateAPIToken = ({ id }: { id: string }) => {
  return api.post(
    servicePrefix + "regenerate-access-token",
    {
      id,
    },
    {
      headers: authHeaders(),
    },
  );
};

export const updateWhitelist = ({
  id,
  domains,
}: {
  id: string;
  domains: string[];
}) => {
  return api.post<IBucketDataWithStats>(
    servicePrefix + id + "/update-whitelist",
    {
      whiteList: domains,
    },
    {
      headers: authHeaders(),
    },
  );
};

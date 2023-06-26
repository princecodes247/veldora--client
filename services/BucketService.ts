import { AxiosResponse } from "axios";
import { GetBucketsData, ResponseBody } from "../interfaces/services";
import api, { authHeaders } from "./config";
import { IBucketData, ISubmissionData } from "@/interfaces";

const servicePrefix = "/buckets/";
const submissionsPrefix = "/submissions/";

export const getBucket = (id: string) => {
  return api.get<ResponseBody<IBucketData>>(servicePrefix + id, {});
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
  return api.get<GetBucketsData>(
    `${servicePrefix}?name=${name}&page=${page}&pageSize=${pageSize}`,
    {
      headers: authHeaders(),
    },
  );
};
export const getSubmissions = ({
  id,
  page = 1,
  pageSize,
}: Partial<{
  id: string;
  page?: number;
  pageSize?: number;
}>) => {
  return api.get<ResponseBody<ISubmissionData[]>>(
    `${submissionsPrefix}?bucket=${id}&page=${page}&pageSize=${pageSize}`,
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
  return api.get<GetBucketsData>(
    `${servicePrefix}?name=${name}&page=${page}&pageSize=${pageSize}`,
    {},
  );
};

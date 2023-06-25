import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getSubmissions, getUserBuckets } from "../services/BucketService";

const useSubmissions = ({
  id = "",
  page = 1,
  pageSize = 10,
}: Partial<{
  id: string;
  page: number;
  pageSize: number;
}>) => {
  return useQuery({
    queryKey: ["bucket", id, page, pageSize],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getSubmissions({
        id,
        page: pageParam,
        pageSize,
      });
      console.log({ result: result.data.data });
      const buckets = result.data.data;
      return buckets;
    },
  });
};

export default useSubmissions;

import { useInfiniteQuery } from "@tanstack/react-query";
import { getBuckets, getUserBuckets } from "../services/BucketService";

const useUserBuckets = ({
  name = "",
  page = 1,
  pageSize = 10,
}: Partial<{
  name: string;
  page: number;
  pageSize: number;
}>) => {
  return useInfiniteQuery({
    queryKey: ["buckets", name, page, pageSize],
    queryFn: async ({ pageParam = 1 }) => {
      const result = await getUserBuckets({
        name,
        page: pageParam,
        pageSize,
      });

      const buckets = result.data;
      return buckets;
    },
    getNextPageParam: (lastPage, pages) => (lastPage?.data.meta?.page ?? 1) + 1,
  });
};

export default useUserBuckets;

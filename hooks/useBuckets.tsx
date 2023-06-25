import { useInfiniteQuery } from "@tanstack/react-query";
import { getBuckets } from "../services/BucketService";

const useBuckets = ({
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
      const result = await getBuckets({
        name,
        page: pageParam,
        pageSize,
      });
      console.log({ result: result.data.data });
      const events = result.data.data;
      return events;
    },
    getNextPageParam: (lastPage, pages) =>
      (lastPage?.meta?.current_page ?? 1) + 1,
  });
};

export default useBuckets;

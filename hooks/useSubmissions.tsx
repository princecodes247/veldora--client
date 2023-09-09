import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getSubmissions, getUserBuckets } from "../services/BucketService";

const useSubmissions = ({
  id = "",
  page,
  pageSize = 10,
}: Partial<{
  id: string;
  page: number;
  pageSize: number;
}>) => {
  return useQuery({
    queryKey: ["submissions", id, page, pageSize],
    queryFn: async () => {
      const result = await getSubmissions({
        id,
        page: page ?? 0,
        pageSize,
      });

      const submissions = result.data;
      return submissions.data;
    },
  });
};

export default useSubmissions;

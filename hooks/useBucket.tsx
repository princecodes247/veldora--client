import { useQuery } from "@tanstack/react-query";
import { getBucket } from "../services/BucketService";

const useBucket = (id: string) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const result = await getBucket(id);
      console.log({ result: result.data.data });
      return result.data.data;
    },
    // placeholderData: [],
    enabled: id.length > 0,
  });
};

export default useBucket;

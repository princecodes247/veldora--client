import { useQuery } from "@tanstack/react-query";
import { getBucket } from "../services/BucketService";

const useBucket = (id: string, handleError = () => {}) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      try {
        const result = await getBucket(id);
      console.log({ result: result.data.data });
      return result.data.data;
      } catch (error) {
        handleError()
      }
    },
    // placeholderData: [],
    enabled: id.length > 0,
  });
};

export default useBucket;

import { useQuery } from "@tanstack/react-query";
import { getEvent } from "../services/BucketService";

const useEvent = (id: string) => {
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const result = await getEvent(id);
      console.log({ result: result.data.data });
      return result.data.data;
    },
    // placeholderData: [],
    enabled: id.length > 0,
  });
};

export default useEvent;

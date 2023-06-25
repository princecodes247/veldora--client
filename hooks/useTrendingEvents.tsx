import { useQuery } from "@tanstack/react-query";
import { getTrendingEvents } from "@/services/BucketService";
import { IEventData } from "../interfaces";

const useTrendingEvents = ({
  name = "",
  page = 1,
  pageSize = 10,
}: Partial<{
  name: string;
  page: number;
  pageSize: number;
}>) => {
  return useQuery({
    queryKey: ["trending-events"],
    queryFn: async () => {
      const result = await getTrendingEvents();

      const events = result.data.data as IEventData[];
      return events.slice(0, 3);
    },
    placeholderData: [],
  });
};

export default useTrendingEvents;

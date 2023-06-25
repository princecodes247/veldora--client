import { useQuery } from "@tanstack/react-query";
import { getPromotions } from "../services/BucketService";
import { IPromotionData } from "./../interfaces/index";

const usePromotions = () => {
  return useQuery({
    queryKey: ["promotions"],
    queryFn: async () => {
      const result = await getPromotions();

      const promotions = result.data.data as IPromotionData[];
      return promotions;
    },
    placeholderData: [],
  });
};

export default usePromotions;

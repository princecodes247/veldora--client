import { IUserData } from "@/interfaces/services";
import { getUser } from "@/services/UserService";
import { useQuery } from "@tanstack/react-query";

const useUser = ({
  tryOnce = false,
  onSuccessFunction = (data: Partial<IUserData>) => {},
  userRequired = true,
}) => {
  return useQuery({
    queryKey: ["user"],
    cacheTime: 15,
    staleTime: 0,
    queryFn: async () => {
      const result = await getUser(userRequired);
      onSuccessFunction(result.data);
      return result.data;
    },
    refetchOnWindowFocus: !tryOnce,
    retry: tryOnce ? false : 3,
  });
};

export default useUser;

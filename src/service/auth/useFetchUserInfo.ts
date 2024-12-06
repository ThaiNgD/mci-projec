import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { userInfor } from "../axios/userInfor";

export const useFetchUserInfo = (): UseQueryResult<UserInfo[], Error> => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => userInfor.get(),
    enabled: true,
  });
};

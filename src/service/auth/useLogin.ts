import { setAccessToken, setRefreshToken } from "@/config";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authApi, IResultAuth } from "../axios/authApi";

export const useAuthLogin = (): UseMutationResult<
  IResultAuth,
  Error,
  IFormLogin,
  unknown
> => {
  const router = useRouter();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      console.log(response);
      if (response) {
        setAccessToken(response.access_token);
        setRefreshToken(response.refresh_token);
        toast.success("Đăng nhập thành công");
        router.push(`/user-management`);
      } else {
        toast.error("Đăng nhập thất bại");
      }
    },
  });
};

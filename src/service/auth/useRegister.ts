import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authApi, IResultAuth } from "../axios/authApi";

export const useAuthRegister = (): UseMutationResult<
  IResultAuth,
  Error,
  IFormLogin,
  unknown
> => {
  const router = useRouter();
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (response) => {
      if (response) {
        toast.success("Đăng ký thành công");
        router.push(`/login`);
      } else {
        toast.error("Đăng ký thất bại");
      }
    },
  });
};

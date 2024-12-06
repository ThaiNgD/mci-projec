import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IResultAuth } from "../axios/authApi";
import { userInfor } from "../axios/userInfor";

export const useAddUser = (): UseMutationResult<
  IResultAuth,
  Error,
  UserInfo,
  unknown
> => {
  return useMutation({
    mutationFn: userInfor.addUser,
    onSuccess: (response) => {
      console.log(response);
      if (response) {
        toast.success("Thêm thành công");
      } else {
        toast.error("Thêm thất bại");
      }
    },
  });
};

"use client";
import InputField from "@/components/CustomField/InputField";
import ModalAddAccount from "@/components/Modal/ModalAddAccount";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const Page = () => {
  const [isShowModalAddAccount, setIsShowModalAddAccount] = useState(false);
  return (
    <div className="p-[20px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[10px]">
          <div className="flex gap-2">
            <FaRegUserCircle size={30} className="text-[#845B04]" />
            <text className="text-[28px] font-semibold">Quản lý tài khoản</text>
          </div>
          <div className="flex gap-[30px]">
            <InputField
              name="filter"
              placeholder="Tên, SĐT, Email"
              className="!w-[200px]"
            />
            <div className="rounded-full p-2 border h-fit">
              <CiFilter />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex  gap-2">
            <div className="flex flex-col gap-2">
              <p className="text-end">Mrs Conan</p>
              <p className="text-end">Nhân viên kinh doanh</p>
            </div>
            <div className="rounded-full border flex items-center">
              <FaRegUserCircle size={30} className="text-[#845B04]" />
            </div>
          </div>
          <button
            className="px-[20px] py-[8.5px] text-white bg-[#845B04] rounded-[8px]"
            onClick={(): void => {
              setIsShowModalAddAccount(true);
            }}
          >
            Thêm khách hàng
          </button>
        </div>
      </div>
      <ModalAddAccount
        isShow={isShowModalAddAccount}
        setIsShow={setIsShowModalAddAccount}
      />
    </div>
  );
};

export default Page;

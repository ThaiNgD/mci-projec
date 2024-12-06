import { sourceOptions, statusOptions } from "@/config/configOption";
import { useAddUser } from "@/service/user/useAddUser";
import { Modal } from "flowbite-react";
import { useFormik } from "formik";
import { Dispatch, FC, SetStateAction } from "react";
import DatePickerField from "../CustomField/DatePickerField";
import InputField from "../CustomField/InputField";
import RadioField from "../CustomField/RadioField";
import { SelectField } from "../CustomField/SelectField";
import TableStateInfo from "../Table/TableStateInfo";

interface ModalAddAccountProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalAddAccount: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false);
  const { mutate: AddUserMutate, isPending } = useAddUser();
  const formik = useFormik<UserInfo>({
    initialValues: {
      status: 1,
      source: 1, //Nguồn khách hàng
      social_media: 1, // Nguồn khách hàng
      service: [1, 1], //Sản phẩm quan tâm"
      full_name: "", // Họ tên khách hàng
      gender: "Nam", // Giới tính
      phone_number: "", //Số điện thoại
      detailed_info: "Hello",
      follow_down_date: new Date(),
      follow_up_date: new Date(),
    },
    onSubmit: (values) => {
      const submitValue = {
        ...values,
        follow_down_date: new Date(),
        follow_up_date: new Date(),
        detailed_info: "Hello",
      };
      console.log(submitValue);
      AddUserMutate(submitValue);
      handleClose();
    },
  });
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3 border-b rounded-t-[4px] bg-[#845B04] text-white">
        <span className="text-white">Thêm khác hàng</span>
      </Modal.Header>
      <Modal.Body className="">
        <form
          id="addUser-form"
          onSubmit={formik.handleSubmit}
          className="p-[20px]"
        >
          <div className="flex flex-col gap-[10px]">
            <div className="grid grid-cols-3 gap-[40px]">
              <div className="flex flex-col gap-[10px]">
                <InputField
                  name="full_name"
                  placeholder="Họ và tên"
                  isRequired
                  isVertical
                  label="Họ và tên"
                  clsLabelWrapper="text-[12px] font-light"
                />
                <div className="grid grid-cols-2 gap-[10px]">
                  <SelectField
                    name="source"
                    label="Nguồn khách hàng"
                    isRequired
                    options={sourceOptions}
                    formik={formik}
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                  <SelectField
                    name="status"
                    label="Trạng thái"
                    formik={formik}
                    options={statusOptions}
                    isRequired
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                </div>
              </div>
              <div className="grid  grid-cols-4">
                <p className="text-sm text-gray-300">Giới tính</p>
                <RadioField
                  name="gender"
                  classWapper="items-center"
                  value={"Nam"}
                  label="Nam"
                  formik={formik}
                />
                <RadioField
                  name="gender"
                  formik={formik}
                  value={"Nữ"}
                  label="Nữ"
                />
                <RadioField
                  name="gender"
                  formik={formik}
                  value={"Khác"}
                  label="Khác"
                />
              </div>
              <div className="w-fit h-fit flex flex-col">
                <p className="text-[12px] font-light">Ngày sinh</p>
                <DatePickerField />
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="flex flex-col gap-[20px]">
                <p>Thông tin liên hệ</p>
                <InputField
                  formik={formik}
                  name="phone_number"
                  placeholder="Số điện thoại"
                  isRequired
                  isVertical
                  label="Số điện thoại"
                  clsLabelWrapper="text-[12px] font-light"
                />
                <div className="flex flex-col gap-[20px]">
                  <p>Thông tin chi tiết</p>
                </div>
                <SelectField
                  name="detailed_info"
                  formik={formik}
                  label="Sản phẩm quan tâm"
                  isRequired
                  isVertical
                  isMulti
                  clsLabelWrapper="text-[12px] font-light"
                />
                <InputField
                  name="notes"
                  formik={formik}
                  placeholder="Ghi chú"
                  isRequired
                  isVertical
                  label="Ghi chú"
                  clsLabelWrapper="text-[12px] font-light"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <InputField
                  name="email"
                  formik={formik}
                  placeholder="Email"
                  isRequired
                  isVertical
                  label="Email"
                  clsLabelWrapper="text-[12px] font-light"
                />
                <div className="flex flex-col gap-[10px]">
                  <SelectField
                    name="city"
                    formik={formik}
                    classWapper="mb-[7px]"
                    label="Địa chỉ liên hệ"
                    isRequired
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                  <SelectField
                    name="district"
                    formik={formik}
                    clsLabelWrapper="text-[12px] font-light"
                  />
                  <SelectField
                    name="ward"
                    formik={formik}
                    clsLabelWrapper="text-[12px] font-light"
                  />
                  <SelectField
                    name="address"
                    formik={formik}
                    clsLabelWrapper="text-[12px] font-light"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[13px]">
                <div className="flex gap-3">
                  <SelectField
                    name=""
                    height="38px"
                    classWapper="mb-[7px]"
                    label="Mạng xã hội"
                    formik={formik}
                    isRequired
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                  <InputField
                    name="email"
                    placeholder="Email"
                    isRequired
                    isVertical
                    classWapper="flex-auto"
                    label="Email"
                    clsLabelWrapper="text-[12px] font-light"
                  />
                </div>

                <div className="flex flex-col gap-[10px]">
                  <SelectField
                    name=""
                    classWapper="mb-[7px]"
                    label="Địa chỉ liên hệ"
                    isRequired
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-3">
              <p>Thông tin chăm sóc khách hàng</p>
              <TableStateInfo />
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end p-2 bg-gray-200">
        <button
          className="w-[150px] px-5 py-2 rounded-md font-medium bg-white text-red-400"
          onClick={handleClose}
        >
          Hủy
        </button>
        <button
          form="addUser-form"
          type="submit"
          className="w-[150px] px-5 py-2 rounded-md text-white font-medium bg-[#845B04]"
        >
          {isPending ? <div className="loading size-[24px]"></div> : "Thêm"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalAddAccount;

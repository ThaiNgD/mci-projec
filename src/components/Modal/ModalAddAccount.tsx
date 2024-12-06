import { Modal } from "flowbite-react";
import { Dispatch, FC, SetStateAction } from "react";
import InputField from "../CustomField/InputField";
import { SelectField } from "../CustomField/SelectField";

interface ModalAddAccountProps {
  isShow: boolean;
  setIsShow?: Dispatch<SetStateAction<boolean>>;
}

const ModalAddAccount: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false);

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-notifi modal">
      <Modal.Header className="px-5 py-3 border-b rounded-t-[4px] bg-[#845B04] text-white">
        <span className="text-white">Thêm khác hàng</span>
      </Modal.Header>
      <Modal.Body className="">
        <div className="p-[20px]">
          <div className="flex flex-col gap-[20px]">
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="flex flex-col gap-[10px]">
                <InputField
                  name="name"
                  placeholder="Họ và tên"
                  isRequired
                  isVertical
                  label="Họ và tên"
                  clsLabelWrapper="text-[12px] font-light"
                />
                <div className="grid grid-cols-2 gap-[10px]">
                  <SelectField
                    name=""
                    label="Nguồn khách hàng"
                    isRequired
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                  <SelectField
                    name=""
                    label="Trạng thái"
                    isRequired
                    isVertical
                    clsLabelWrapper="text-[12px] font-light"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-3 gap-[30px]">
              <div className="flex flex-col gap-[20px]">
                <p>Thông tin liên hệ</p>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddAccount;

import { configTableManagerAccount } from "@/config/configTable";
import { useFetchUserInfo } from "@/service/auth/useFetchUserInfo";
import MantineTableCustom from "../MantineTableCustom";

const TableSettingSystem = (): JSX.Element => {
  const { data } = useFetchUserInfo();
  return (
    <div className=" rounded-lg bg-white">
      <div className="md:flex md:space-x-4 md:items-center space-y-4 md:space-y-0 md:justify-between"></div>
      <div className="bg-white custom-shadow rounded-[20px] ">
        <MantineTableCustom
          column={configTableManagerAccount}
          //eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={data as any}
          idAccessor={""}
        />
      </div>
    </div>
  );
};

export default TableSettingSystem;

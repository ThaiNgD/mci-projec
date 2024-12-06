import { StateInfo } from "@/config/configTable";
import MantineTableCustom from "../MantineTableCustom";

const TableStateInfo = (): JSX.Element => {
  return (
    <div className=" rounded-lg bg-white">
      <div className="md:flex md:space-x-4 md:items-center space-y-4 md:space-y-0 md:justify-between"></div>
      <div className="bg-white custom-shadow rounded-[20px] ">
        <MantineTableCustom column={StateInfo} data={[]} idAccessor={""} />
      </div>
    </div>
  );
};

export default TableStateInfo;

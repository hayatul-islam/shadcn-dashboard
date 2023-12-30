import CircleUser from "@/assets/icons/CircleUser";
import SingleUser from "@/assets/icons/SingleUser";
import UserListIcon from "@/assets/icons/UserListIcon";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const TableHeader = () => {
  return (
    <div className="md:flex justify-between space-y-4 md:space-y-0">
      <div className="flex items-center gap-2">
        <Button className="h-[20px] w-[20px] md:w-[32px] md:h-[32px] p-0">
          <ArrowLeft className="w-[12px] md:w-[20px]" />
        </Button>
        <h4 className="text-[16px] md:text-[20px] ">
          <span className="font-medium">Trips:</span>
          <span className="text-gray">16 Oct, 2023</span>
        </h4>
      </div>
      <div className="flex gap-2 md:gap-4 items-center justify-end">
        <Button className="flex items-center gap-2 lg:gap-4 px-2 md:px-4">
          <div className="flex gap-1 font-medium">
            <UserListIcon />
            <p className="pb-[2px] text-[14px] md:text-[16px]">Driver</p>
          </div>
          <ChevronDown size={14} />
        </Button>
        <Button className="flex gap-2 lg:gap-4 items-center px-2 md:px-4">
          <div className="flex gap-1 font-medium">
            <SingleUser />
            <p className="pb-[2px] text-[14px] md:text-[16px]">Client</p>
          </div>
          <ChevronDown size={14} />
        </Button>
        <Button className="flex gap-2 lg:gap-4 items-center px-2 md:px-4">
          <div className="flex gap-1 font-medium">
            <CircleUser />
            <p className="pb-[2px] text-[14px] md:text-[16px]">Account</p>
          </div>
          <ChevronDown size={14} />
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;

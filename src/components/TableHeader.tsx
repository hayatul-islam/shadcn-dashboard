import CircleUser from "@/assets/icons/CircleUser";
import SingleUser from "@/assets/icons/SingleUser";
import UserListIcon from "@/assets/icons/UserListIcon";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const TableHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <Button className="w-[32px] h-[32px] p-0">
          <ArrowLeft size={16} />
        </Button>
        <h4 className="text-[20px] ">
          <span className="font-medium">Trips:</span>
          <span className="text-gray">16 Oct, 2023</span>
        </h4>
      </div>
      <div className="flex gap-4 items-center">
        <Button className="flex gap-4 items-center">
          <div className="flex gap-1 font-medium">
            <UserListIcon />
            <p className="pb-[2px]">Driver</p>
          </div>
          <ChevronDown size={14} />
        </Button>
        <Button className="flex gap-4 items-center">
          <div className="flex gap-1 font-medium">
            <SingleUser />
            <p className="pb-[2px]">Client</p>
          </div>
          <ChevronDown size={14} />
        </Button>
        <Button className="flex gap-4 items-center">
          <div className="flex gap-1 font-medium">
            <CircleUser />
            <p className="pb-[2px]">Account</p>
          </div>
          <ChevronDown size={14} />
        </Button>
      </div>
    </div>
  );
};

export default TableHeader;

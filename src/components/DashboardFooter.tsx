import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const DashboardFooter = () => {
  return (
    <div className="flex justify-between pb-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <ChevronLeft size={16} />
          <ChevronRight size={16} />
        </div>
        <p className="text-[#8A8F96] text-[14px]"> 1-10 of 69 results</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-[#8A8F96] text-[14px]">Rows per page</p>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center">
              <p className="font-bold text-[14px]">10</p>
              <ChevronDown className="font-bold" size={14} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-4"></PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DashboardFooter;

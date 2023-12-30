import FilterIcon from "@/assets/icons/FilterIcon";
import FullScreenArrowIcon from "@/assets/icons/FullScreenArrowIcon";
import { AlignJustify } from "lucide-react";
import { useRef } from "react";
import Search from "./Search";
import { Button } from "./ui/button";

const Header = () => {
  const bodyRef = useRef(document.body);

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      bodyRef.current.requestFullscreen();
    }
  };
  return (
    <div className="h-[70px] md:h-[92px] sticky top-0 bg-white z-50 px-4 md:px-8 border-b items-center border-stroke-100 flex justify-between gap-2">
      <button>
        <AlignJustify size={20} />
      </button>
      <div className="w-[170px] md:w-[280px]">
        <Search placeholder="Search" />
      </div>
      <div className="space-x-2 md:space-x-4">
        <Button className="space-y-1 md:space-x-2 px-2 md:px-4 h-[35px]">
          <FilterIcon />
          <span className="text-[14px] md:text-[16px]">Filter</span>
        </Button>
        <Button
          onClick={toggleFullScreen}
          className="w-[35px] h-[35px] md:w-[44px] md:h-[44px] p-0"
        >
          <FullScreenArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;

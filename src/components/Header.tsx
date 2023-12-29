import FilterIcon from "@/assets/icons/FilterIcon";
import FullScreenArrowIcon from "@/assets/icons/FullScreenArrowIcon";
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
    <div className="h-[92px] sticky top-0 bg-white z-50 px-8 border-b items-center border-stroke-100 flex justify-between">
      <div className="w-[280px]">
        <Search placeholder="Search" />
      </div>
      <div className="space-x-4">
        <Button className="space-x-2">
          <FilterIcon />
          <span>Filter</span>
        </Button>
        <Button onClick={toggleFullScreen} className="w-[44px] h-[44px] p-0">
          <FullScreenArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default Header;

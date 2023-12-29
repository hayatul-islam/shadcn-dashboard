import CurrencyIcon from "@/assets/icons/CurrencyIcon";
import DashboardIcon from "@/assets/icons/DashboardIcon";
import DateIcon from "@/assets/icons/DateIcon";
import DonateIcon from "@/assets/icons/DonateIcon";
import ListIcon from "@/assets/icons/ListIcon";
import MapIcon from "@/assets/icons/MapIcon";
import NoteIcon from "@/assets/icons/NoteIcon";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import ProfileIcon from "@/assets/icons/ProfileIcon";
import SettingIcon from "@/assets/icons/SettingIcon";
import UserIcon from "@/assets/icons/UserIcon";
import logo from "../assets/logo.png";
import { Button } from "./ui/button";

const Sidebar = () => {
  type MenuType = {
    route: string;
    icon: any;
  };

  const menu: Array<MenuType> = [
    {
      route: "",
      icon: <DashboardIcon />,
    },
    {
      route: "",
      icon: <NoteIcon />,
    },
    {
      route: "",
      icon: <MapIcon />,
    },
    {
      route: "/",
      icon: <DateIcon className="fill-primary" />,
    },
    {
      route: "",
      icon: <UserIcon />,
    },
    {
      route: "",
      icon: <ProfileIcon />,
    },
    {
      route: "",
      icon: <DonateIcon />,
    },
    {
      route: "",
      icon: <CurrencyIcon />,
    },
    {
      route: "",
      icon: <ListIcon />,
    },
    {
      route: "",
      icon: <SettingIcon />,
    },
  ];

  return (
    <div className="w-[88px] overflow-y-auto h-[100vh] no-scrollbar">
      <div className="pt-6 bg-white sticky top-0">
        <img className="mx-auto" src={logo} alt="" />
      </div>
      <div className="py-6 space-y-5">
        {menu?.map((data, idx) => (
          <div className="flex justify-center " key={idx}>
            <button
              className={`${
                data.route === "/" && "bg-primary-100"
              } hover:bg-primary-100 group h-[40px] w-[40px] flex justify-center items-center rounded`}
            >
              {data.icon}
            </button>
          </div>
        ))}
        <hr className="w-[40px] border-stroke-100 mx-auto" />
        <div className="flex justify-center">
          <Button className="text-white bg-primary text-[24px] w-[40px] h-[40px] ">
            +
          </Button>
        </div>
        <div className="space-y-8 pt-[150px]">
          <button
            className={`
                 hover:bg-primary-100 group h-[40px] w-[40px] flex justify-center items-center rounded mx-auto`}
          >
            <NotificationIcon />
          </button>
          <button
            className={`
                 bg-stroke-100 group h-[40px] w-[40px] flex justify-center items-center rounded mx-auto font-medium text-[14px]`}
          >
            AR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

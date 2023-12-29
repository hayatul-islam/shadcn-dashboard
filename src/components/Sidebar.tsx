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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { status } from "@/constants/constants";
import { useState } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
    <div className="flex ">
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
      <div className="w-[284px] border-x border-stroke-100 overflow-y-auto h-[100vh] no-scrollbar">
        <h2 className="text-[24px] font-medium p-8 border-b h-[92px] border-stroke-100 bg-white sticky top-0 z-50">
          Calendar
        </h2>
        <div className="space-y-6 px-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="h-full"
          />
          <hr className="text-stroke-100" />
          <Search placeholder="Search trip..." />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-medium text-[16px] ">
                Trip Status
              </AccordionTrigger>
              <AccordionContent className="sidebar-accordion pt-2 space-y-4">
                {status?.map((value: string, idx: number) => {
                  let style = "";
                  let dotColor = "";
                  if (value === "Completed") {
                    style =
                      "bg-success border-success-300 text-success-400 hover:bg-success";
                    dotColor = "bg-success-300";
                  } else if (value === "Upcoming") {
                    style =
                      "bg-warning border-warning-300 text-warning-400 hover:bg-warning";
                    dotColor = "bg-warning-300";
                  } else if (value === "In Progress") {
                    style =
                      "bg-progress border-progress-300 text-progress-400 hover:bg-progress";
                    dotColor = "bg-progress-300";
                  } else if (value === "Canceled") {
                    style =
                      "bg-danger border-danger-300 text-danger-400 hover:bg-danger";
                    dotColor = "bg-danger-300";
                  }
                  return (
                    <div key={idx} className="flex gap-2 items-center">
                      <Checkbox className="text-white font-bold" />
                      <Button
                        className={` ${style} border font-medium text-[12px] flex gap-2 items-center h-[28px]`}
                      >
                        <span
                          className={`${dotColor} h-2 w-2 rounded-full`}
                        ></span>{" "}
                        <span>{value}</span>
                      </Button>
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible className="sidebar-accordion">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-medium text-[16px] ">
                Accounts
              </AccordionTrigger>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { status } from "@/constants/constants";
import { ContextProvider } from "@/context/Context";
import { X } from "lucide-react";
import { useContext, useState } from "react";
import Search from "./Search";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Checkbox } from "./ui/checkbox";

const LeftSidebar = () => {
  const { setIsMenuOpen, isMenuOpen }: any = useContext(ContextProvider);
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="h-full border-r border-stroke-100">
      <div className="flex justify-between items-center p-4 md:p-8 border-b h-[70px] md:h-[92px] border-stroke-100 bg-white sticky top-0 z-50">
        <h2 className="text-[20px] md:text-[24px] font-medium ">Calendar</h2>
        {isMenuOpen && (
          <button className="md:hidden" onClick={() => setIsMenuOpen(false)}>
            <X />
          </button>
        )}
      </div>
      <div className="space-y-6 px-6 pt-8 border-r border-stroke-100">
        <Calendar mode="single" selected={date} onSelect={setDate} />
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
  );
};

export default LeftSidebar;

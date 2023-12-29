import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ContextProvider } from "@/context/Context";
import { ChevronDown, MoreVertical, PenLine, Trash, View } from "lucide-react";
import { useContext } from "react";
import { Button } from "./ui/button";
import { TableCell, TableRow } from "./ui/table";

const TableDataRow = ({ data, setSelectedBulkIds, selectedBulkIds }: any) => {
  const { isFullView, setIsFullView }: any = useContext(ContextProvider);
  const {
    id,
    driver,
    status,
    pick_address,
    drop_address,
    pickup,
    appointment_time,
    drop_time,
    account_name,
    patient_name,
    miles,
    vehicle_type,
  } = data || {};

  let buttonStyle = "";
  let rowStyle = "";
  let dotColor = "";
  if (status === "Completed") {
    buttonStyle =
      "bg-success border-success-300 text-success-400 hover:bg-success";
    dotColor = "bg-success-300";
    rowStyle = "bg-success-100 border-success-200";
  } else if (status === "Upcoming") {
    buttonStyle =
      "bg-warning border-warning-300 text-warning-400 hover:bg-warning";
    dotColor = "bg-warning-300";
    rowStyle = "bg-warning-100 border-warning-200";
  } else if (status === "In Progress") {
    buttonStyle =
      "bg-progress border-progress-300 text-progress-400 hover:bg-progress";
    dotColor = "bg-progress-300";
    rowStyle = "bg-progress-100 border-progress-200";
  } else if (status === "Canceled") {
    buttonStyle = "bg-danger border-danger-300 text-danger-400 hover:bg-danger";
    dotColor = "bg-danger-300";
    rowStyle = "bg-danger-100 border-danger-200";
  } else if (status === "Scheduled") {
    buttonStyle = "bg-[#FCFCFC] border-gray text-gray hover:bg-[#FCFCFC]";
    dotColor = "bg-[#C5C9D4]";
    rowStyle = "bg-white border-[#EFEFEF]";
  }

  // Handle individual row selection
  const handleRowSelection = () => {
    const isSelected: boolean = selectedBulkIds.includes(id);

    if (isSelected) {
      setSelectedBulkIds(
        selectedBulkIds.filter((selectedId: number) => selectedId !== id)
      );
    } else {
      setSelectedBulkIds([...selectedBulkIds, id]);
    }
  };

  return (
    <TableRow className={`${rowStyle}`}>
      <TableCell>
        <input
          className="h-4 w-4 cursor-pointer rounded-[10px] border-neutral-300 "
          type="checkbox"
          checked={selectedBulkIds.includes(id)}
          onChange={handleRowSelection}
        />
      </TableCell>
      {isFullView && (
        <>
          <TableCell className="min-w-[200px]">{account_name}</TableCell>
          <TableCell className="min-w-[150px]">{patient_name}</TableCell>
        </>
      )}
      <TableCell className="min-w-[200px]">
        <Button className="flex gap-2 items-center bg-stroke border border-stroke-100">
          <div className="flex gap-2 font-medium">
            <p className="text-primary font-medium w-[24px] h-[24px] bg-primary-100">
              BJ
            </p>
            <p className="pb-[2px]">{driver}</p>
          </div>
          <ChevronDown size={14} />
        </Button>
      </TableCell>

      <TableCell>
        <Button
          className={` ${buttonStyle} border font-medium text-[12px] flex gap-2 items-center h-[28px]`}
        >
          <span className={`${dotColor} h-2 w-2 rounded-full`}></span>{" "}
          <span>{status}</span>
        </Button>
      </TableCell>
      <TableCell className="min-w-[220px]">{pick_address}</TableCell>
      <TableCell className="min-w-[220px]">{drop_address}</TableCell>
      <TableCell className="min-w-[120px]">{pickup}</TableCell>
      {isFullView && (
        <>
          <TableCell className="min-w-[180px]">{appointment_time}</TableCell>
          <TableCell className="min-w-[120px]">{drop_time}</TableCell>
          <TableCell>{miles}</TableCell>
          <TableCell className="min-w-[130px]">{vehicle_type}</TableCell>
        </>
      )}
      <TableCell className="flex justify-between uppercase">
        <div></div>

        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger>
              <MoreVertical size={16} className="text-right" />
            </PopoverTrigger>
            <PopoverContent className="bg-white space-y-2 ">
              <button
                onClick={() => setIsFullView((prev: boolean) => !prev)}
                className="flex gap-2 items-center hover:bg-[#F1F6FF] w-full p-2 rounded"
              >
                <View size={16} />
                <span className="font-medium">View</span>
              </button>
              <button className="flex gap-2 items-center hover:bg-[#F1F6FF] w-full p-2 rounded">
                <PenLine size={16} />
                <span className="font-medium">Edit</span>
              </button>
              <button className="flex gap-2 items-center hover:bg-[#F1F6FF] w-full p-2 rounded">
                <Trash size={16} />
                <span className="font-medium">Delete</span>
              </button>
            </PopoverContent>
          </Popover>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableDataRow;

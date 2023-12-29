import { ChevronDown, MoreVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { TableCell, TableRow } from "./ui/table";

const TableDataRow = ({ data }) => {
  const {
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

  return (
    <TableRow className={`${rowStyle}`}>
      <TableCell>
        <Checkbox className="text-white" />
      </TableCell>
      <TableCell>
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
      <TableCell>{pick_address}</TableCell>
      <TableCell>{drop_address}</TableCell>

      <TableCell className="flex justify-between uppercase">
        <div></div>
        <div className="flex items-center space-x-2">
          <span>{pickup}</span>
          <MoreVertical size={16} className="text-right" />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableDataRow;

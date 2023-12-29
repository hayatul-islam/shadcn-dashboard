import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tripData } from "@/constants/constants";
import { MoreVertical } from "lucide-react";
import TableDataRow from "./TableRow";
import { Checkbox } from "./ui/checkbox";

const TableCom = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox className="text-white pt-[8px]" />
          </TableHead>

          <TableHead>Driver</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pick address</TableHead>
          <TableHead>Drop address</TableHead>
          <TableHead className="flex justify-between uppercase">
            <div></div>
            <div className="flex items-center space-x-2">
              <span>Pickup</span>
              <MoreVertical size={16} className="text-right" />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tripData?.map((data, idx) => (
          <TableDataRow data={data} key={idx} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCom;

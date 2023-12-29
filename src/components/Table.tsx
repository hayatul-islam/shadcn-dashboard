import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tripData } from "@/constants/constants";
import { ContextProvider } from "@/context/Context";
import { MoreVertical } from "lucide-react";
import { useContext, useState } from "react";
import TableDataRow from "./TableRow";

const TableCom = () => {
  const [selectedBulkIds, setSelectedBulkIds] = useState<number[]>([]);

  const { isFullView }: any = useContext(ContextProvider);

  // Handle bulk selection
  const handleBulkSelection = () => {
    // If all rows are already selected, deselect all; otherwise, select all
    const allSelected = selectedBulkIds.length === tripData.length;
    if (allSelected) {
      setSelectedBulkIds([]);
    } else {
      const allRowIds: number[] = tripData.map((row) => row.id);
      setSelectedBulkIds(allRowIds);
    }
  };

  // const [selectedBulkIds, setSelectedBulkIds] = useState([]);
  // const { isFullView } = useContext(ContextProvider);

  // // Handle bulk selection
  // const handleBulkSelection = () => {
  //   // If all rows are already selected, deselect all; otherwise, select all
  //   const allSelected = selectedBulkIds.length === tripData.length;
  //   if (allSelected) {
  //     setSelectedBulkIds([]);
  //   } else {
  //     const allRowIds: number[] = tripData.map((row) => row.id);
  //     setSelectedBulkIds(allRowIds);
  //   }
  // };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="pt-1">
            <input
              type="checkbox"
              className="h-4 w-4 "
              checked={selectedBulkIds.length === tripData.length}
              onChange={handleBulkSelection}
            />
          </TableHead>
          {isFullView && (
            <>
              <TableHead>Account Name</TableHead>
              <TableHead>Patient name</TableHead>
            </>
          )}
          <TableHead>Driver</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pick address</TableHead>
          <TableHead>Drop address</TableHead>
          <TableHead>Pickup Time</TableHead>
          {isFullView && (
            <>
              <TableHead>Appointment Time</TableHead>
              <TableHead>Drop Time</TableHead>
              <TableHead>Miles </TableHead>
              <TableHead>Vehicle type </TableHead>
            </>
          )}
          <TableHead className="flex justify-between uppercase">
            <div></div>
            <div className="flex items-center space-x-2">
              <MoreVertical size={16} className="text-right" />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tripData?.map((data, idx) => (
          <TableDataRow
            data={data}
            key={idx}
            selectedBulkIds={selectedBulkIds}
            setSelectedBulkIds={setSelectedBulkIds}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableCom;

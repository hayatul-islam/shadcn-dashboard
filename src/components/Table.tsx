import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { tripData } from "@/constants/constants";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import TableDataRow from "./TableRow";

const TableCom = () => {
  const [selectedBulkIds, setSelectedBulkIds] = useState([]);

  // Handle bulk selection
  const handleBulkSelection = () => {
    // If all rows are already selected, deselect all; otherwise, select all
    const allSelected = selectedBulkIds.length === tripData.length;
    if (allSelected) {
      setSelectedBulkIds([]);
    } else {
      const allRowIds = tripData.map((row) => row.id);
      setSelectedBulkIds(allRowIds);
    }
  };

  console.log(selectedBulkIds);

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

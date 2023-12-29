import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

const TableCom = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox className="text-white" />
          </TableHead>

          <TableHead>Driver</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Pick address</TableHead>
          <TableHead>Drop address</TableHead>
          <TableHead className="text-right">pickup</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Checkbox className="text-white" />
          </TableCell>
          <TableCell>BJ John Smith</TableCell>
          <TableCell>
            <Button>d</Button>
          </TableCell>
          <TableCell>781 Hilll Junctions Apt. 411</TableCell>
          <TableCell>781 Hilll Junctions Apt. 411</TableCell>
          <TableCell className="text-right">04:00 PM</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableCom;

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import InventoryTableItem from "./InventoryTableItem";

const InventoryTable = ({ columns, data, onInputChange }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((c, index) => {
              return (
                <TableCell align="center" key={index.toString()}>
                  {c}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((p) => (
            <InventoryTableItem
              p={p}
              pId={p._id}
              onInputChange={onInputChange}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InventoryTable;

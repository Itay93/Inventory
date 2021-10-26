import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import SuppliersTableItem from "./SuppliersTableItem";

const SuppliersTable = ({ columns, data }) => {
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
          {data.map((s) => (
            <SuppliersTableItem s={s} sId={s._id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SuppliersTable;

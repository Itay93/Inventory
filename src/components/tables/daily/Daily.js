import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import DailyItem from "./DailyItem";

const Daily = ({ columns, data, onInputChange }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((c, index) => {
              return <TableCell key={index.toString()}>{c}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((p, index) => (
            <DailyItem p={p} index={index} onInputChange={onInputChange} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Daily;

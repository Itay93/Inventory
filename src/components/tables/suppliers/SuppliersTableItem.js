import { TableCell, TableRow, Button } from "@material-ui/core";

const SuppliersTableItem = ({ s, sId, onDelete }) => {
  return (
    <TableRow
      key={sId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/** name */}
      <TableCell align="center" component="th" scope="row">
        {s.name}
      </TableCell>
      {/** type */}
      <TableCell align="center">{s.type}</TableCell>
      {/** order days */}
      <TableCell align="center">{s.orderDays.toString()}</TableCell>
      {/** delivery days */}
      <TableCell align="center">{s.deliveryDays.toString()}</TableCell>
      {/** sales agent */}
      <TableCell align="center">{s.salesAgent}</TableCell>
      {/** phone number */}
      <TableCell align="center">{s.number}</TableCell>
      {/** order by */}
      <TableCell align="center">{s.orderBy}</TableCell>
      {/** delete */}
      <TableCell align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(sId)}
        >
          מחק
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default SuppliersTableItem;

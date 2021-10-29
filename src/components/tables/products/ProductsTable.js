import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import ProductsTableItem from "./ProductsTableItem";

const ProductsTable = ({ columns, data, onEdit, onPatch, onDelete }) => {
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
          {data.map((p, index) => (
            <ProductsTableItem
              p={p}
              pId={p._id}
              index={index + 1}
              onEdit={onEdit}
              onPatch={onPatch}
              onDelete={onDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

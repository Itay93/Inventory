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

const ProductsTable = ({ columns, data }) => {
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
          {data.map((p) => (
            <ProductsTableItem p={p} pId={p._id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTable;

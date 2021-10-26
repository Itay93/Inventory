import { TableCell, TableRow } from "@material-ui/core";

const ProductsTableItem = ({ p, pId }) => {
  return (
    <TableRow
      key={pId.toString()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/** product name */}
      <TableCell component="th" scope="row">
        {p.product.name}
      </TableCell>
      {/** product price */}
      <TableCell align="center">{p.product.price}</TableCell>
      {/** product value in sales */}
      <TableCell align="center">{p.product.valueInSales}</TableCell>
      {/** include in monthly inventory */}
      <TableCell align="center">
        {p.product.includeInMonthlyInventory ? "V" : "X"}
      </TableCell>
      {/** supplier name */}
      <TableCell align="center">{p.supplier.name}</TableCell>
      {/** supplier type */}
      <TableCell align="center">{p.supplier.type}</TableCell>
      {/** stock daily */}
      <TableCell align="center">{p.sizes.stockDaily}</TableCell>
      {/** stock monthly */}
      <TableCell align="center">{p.sizes.stockMonthly}</TableCell>
      {/** in order */}
      <TableCell align="center">{p.sizes.inOrder}</TableCell>
      {/** kg */}
      <TableCell align="center">{p.sizes.kg}</TableCell>
      {/** box */}
      <TableCell align="center">{p.sizes.box}</TableCell>
      {/** unit */}
      <TableCell align="center">{p.sizes.unit}</TableCell>
      {/** third */}
      <TableCell align="center">{p.sizes.third}</TableCell>
      {/** double third */}
      <TableCell align="center">{p.sizes.dThird}</TableCell>
      {/** box dough */}
      <TableCell align="center">{p.sizes.boxDough}</TableCell>
      {/** ambat */}
      <TableCell align="center">{p.sizes.ambat}</TableCell>
    </TableRow>
  );
};

export default ProductsTableItem;

import { TableCell, TableRow } from "@material-ui/core";

import TableTextField from "../TableTextField";

const InventoryTableItem = ({ p, index, onInputChange }) => {
  return (
    <TableRow
      key={p._id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/** # */}
      <TableCell align="center" component="th" scope="row">
        {index}
      </TableCell>
      {/** supplier name */}
      <TableCell align="center">{p.supplier.name}</TableCell>
      {/** product name */}
      <TableCell align="center">{p.product.name}</TableCell>
      {/** price */}
      <TableCell align="center">{p.product.price}</TableCell>
      {/** value in sales */}
      <TableCell align="center">{p.product.valueInSales}</TableCell>
      {/** stock daily  */}
      <TableCell align="center">{p.sizes.stockDaily}</TableCell>
      {/** in order */}
      <TableCell align="center">{p.sizes.inOrder}</TableCell>
      {/** kg */}
      <TableCell align="center">
        <TableTextField
          id="kg"
          value={p.inStock.kg}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** box */}
      <TableCell align="center">
        <TableTextField
          id="box"
          value={p.inStock.box}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** unit */}
      <TableCell align="center">
        <TableTextField
          id="unit"
          value={p.inStock.unit}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** third */}
      <TableCell align="center">
        <TableTextField
          id="third"
          value={p.inStock.third}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** double third */}
      <TableCell align="center">
        <TableTextField
          id="dThird"
          value={p.inStock.dThird}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** box dough */}
      <TableCell align="center">
        <TableTextField
          id="boxDough"
          value={p.inStock.boxDough}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** ambat */}
      <TableCell align="center">
        <TableTextField
          id="ambat"
          value={p.inStock.ambat}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
      {/** total in stock */}
      <TableCell align="center">{p.inStock.totalInStock}</TableCell>
      {/** order inventory value */}
      <TableCell align="center">{p.calculations.orderInventoryValue}</TableCell>
      {/** out of stock */}
      <TableCell align="center">{p.calculations.outOfStock}</TableCell>
      {/** need to order */}
      <TableCell align="center">{p.calculations.needToOrder}</TableCell>
      {/** insert order */}
      <TableCell align="center">
        <TableTextField
          id="insertOrder"
          value={p.insertOrder}
          onChange={(e) => onInputChange(e.target, p)}
        />
      </TableCell>
    </TableRow>
  );
};

export default InventoryTableItem;

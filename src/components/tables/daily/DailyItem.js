import { TableCell, TableRow } from "@material-ui/core";

import TableTextField from "../TableTextField";

const DailyItem = ({ p, pId, onInputChange }) => {
  return (
    <TableRow
      key={pId.toString()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/** supplier name */}
      <TableCell component="th" scope="row">
        {p.supplier.name}
      </TableCell>
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
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
      {/** box */}
      <TableCell align="center">
        <TableTextField
          id="box"
          value={p.inStock.box}
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
      {/** unit */}
      <TableCell align="center">
        <TableTextField
          id="unit"
          value={p.inStock.unit}
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
      {/** third */}
      <TableCell align="center">
        <TableTextField
          id="third"
          value={p.inStock.third}
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
      {/** double third */}
      <TableCell align="center">
        <TableTextField
          id="dThird"
          value={p.inStock.dThird}
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
      {/** box dough */}
      <TableCell align="center">
        <TableTextField
          id="boxDough"
          value={p.inStock.boxDough}
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
      {/** ambat */}
      <TableCell align="center">
        <TableTextField
          id="ambat"
          value={p.inStock.ambat}
          onChange={(e) => onInputChange(e.target, pId)}
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
          onChange={(e) => onInputChange(e.target, pId)}
        />
      </TableCell>
    </TableRow>
  );
};

export default DailyItem;

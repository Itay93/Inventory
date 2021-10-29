import { TableCell, TableRow, Button } from "@material-ui/core";

import TableTextField from "../TableTextField";

const ProductsTableItem = ({ p, pId, index, onEdit, onPatch, onDelete }) => {
  return (
    <TableRow
      key={pId}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {/** # */}
      <TableCell align="center" component="th" scope="row">
        {index}
      </TableCell>
      {/** product name */}
      <TableCell align="center">{p.product.name}</TableCell>
      {/** product price */}
      <TableCell align="center">
        <TableTextField
          id={"price"}
          value={p.product.price}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** product value in sales */}
      <TableCell align="center">
        <TableTextField
          id={"valueInSales"}
          value={p.product.valueInSales}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
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
      <TableCell align="center">
        <TableTextField
          id={"kg"}
          value={p.sizes.kg}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** box */}
      <TableCell align="center">
        <TableTextField
          id={"box"}
          value={p.sizes.box}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** unit */}
      <TableCell align="center">
        <TableTextField
          id={"unit"}
          value={p.sizes.unit}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** third */}
      <TableCell align="center">
        <TableTextField
          id={"third"}
          value={p.sizes.third}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** double third */}
      <TableCell align="center">
        <TableTextField
          id={"dThird"}
          value={p.sizes.dThird}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** box dough */}
      <TableCell align="center">
        <TableTextField
          id={"boxDough"}
          value={p.sizes.boxDough}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** ambat */}
      <TableCell align="center">
        <TableTextField
          id={"ambat"}
          value={p.sizes.ambat}
          onChange={(e) => onEdit(e.target, p)}
        />
      </TableCell>
      {/** submit edit */}
      <TableCell align="center">
        <Button variant="contained" color="primary" onClick={() => onPatch(p)}>
          שמור
        </Button>
      </TableCell>
      {/** delete */}
      <TableCell align="center">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(pId)}
        >
          מחק
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ProductsTableItem;

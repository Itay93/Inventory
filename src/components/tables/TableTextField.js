import { TextField } from "@material-ui/core";

const TableTextField = ({ id, ...otherProps }) => {
  return <TextField id={id} type="number" variant="filled" {...otherProps} />;
};

export default TableTextField;

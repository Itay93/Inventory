import { useFormikContext } from "formik";
import { TextField, MenuItem } from "@material-ui/core";

const FormSupplierSelectField = ({ label, name, suppliers, ...otherProps }) => {
  const { values, errors, touched, handleBlur, handleChange } =
    useFormikContext();
  return (
    <TextField
      style={{ width: 170 }}
      select
      label={label}
      id={name}
      name={name}
      value={values[name]}
      onChange={handleChange(name)}
      onBlur={handleBlur(name)}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      variant="filled"
      InputLabelProps={{ shrink: true }}
      {...otherProps}
    >
      {suppliers.map((s) => (
        <MenuItem
          key={s._id}
          value={JSON.stringify({ id: s._id, name: s.name, type: s.type })}
        >
          {s.name}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormSupplierSelectField;

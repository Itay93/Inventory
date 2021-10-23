import { useFormikContext } from "formik";
import { TextField, MenuItem } from "@material-ui/core";

const FormSelectField = ({ label, name, options }) => {
  const { values, errors, touched, handleBlur, handleChange } =
    useFormikContext();
  return (
    <TextField
      style={{ width: 150 }}
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
    >
      {options.map((o) => (
        <MenuItem key={o} value={o}>
          {o}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default FormSelectField;

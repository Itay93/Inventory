import React from "react";
import { TextField } from "@material-ui/core";
import { useFormikContext } from "formik";

const FormTextField = ({ label, name, ...otherProps }) => {
  const { values, errors, touched, handleBlur, handleChange } =
    useFormikContext();
  return (
    <TextField
      label={label}
      id={name}
      name={name}
      value={values[name]}
      onChange={handleChange(name)}
      onBlur={handleBlur(name)}
      error={touched[name] && Boolean(errors[name])}
      helperText={touched[name] && errors[name]}
      variant="filled"
      {...otherProps}
    />
  );
};

export default FormTextField;

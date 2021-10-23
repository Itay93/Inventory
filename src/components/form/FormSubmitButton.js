import React from "react";
import { useFormikContext } from "formik";
import { Button } from "@material-ui/core";

const FormSubmitButton = () => {
  const { handleSubmit } = useFormikContext();
  return (
    <Button variant="contained" onClick={handleSubmit}>
      Submit
    </Button>
  );
};

export default FormSubmitButton;

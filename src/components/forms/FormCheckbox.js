import { Field } from "formik";

const FormCheckbox = ({ name, label, value }) => {
  return (
    <label style={{ marginLeft: 30 }}>
      <Field type="checkbox" name={name} value={value} />
      {label}
    </label>
  );
};

export default FormCheckbox;

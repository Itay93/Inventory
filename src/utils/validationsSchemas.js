import * as yup from "yup";

const product = yup.object().shape({
  pName: yup.string().required("Required"),
  price: yup.number().min(0, "Min of 0").required("Required"),
  valueInSales: yup.number().min(0, "Min of 0").required("Required"),
  sName: yup.string().required("Required"),
  type: yup.string().required("Required"),
  stockDaily: yup.string().required("Required"),
  stockMonthly: yup.string().required("Required"),
  inOrder: yup.string().required("Required"),
  kg: yup.number().min(0, "Min of 0").required("Required"),
  box: yup.number().min(0, "Min of 0"),
  unit: yup.number().min(0, "Min of 0"),
  third: yup.number().min(0, "Min of 0"),
  dThird: yup.number().min(0, "Min of 0"),
  doughBox: yup.number().min(0, "Min of 0"),
  ambat: yup.number().min(0, "Min of 0"),
});

export default {
  product,
};

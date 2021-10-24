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
  box: yup.number().min(0, "Min of 0").required("Required"),
  unit: yup.number().min(0, "Min of 0").required("Required"),
  third: yup.number().min(0, "Min of 0").required("Required"),
  dThird: yup.number().min(0, "Min of 0").required("Required"),
  boxDough: yup.number().min(0, "Min of 0").required("Required"),
  ambat: yup.number().min(0, "Min of 0").required("Required"),
});

const supplier = yup.object().shape({
  name: yup.string().required("Required"),
  type: yup.string().required("Required"),
  deliveryDays: yup.array().required("Required"),
  orderDays: yup.array().required("Required"),
  salesAgent: yup.string().required("Required"),
  number: yup.number().required("Required"),
  orderBy: yup.string().required("Required"),
});

export default {
  product,
  supplier,
};

import "../config/style.css";
import React, { useContext } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";
import { Field } from "formik";

import ConstantsContext from "../context/ConstantsContext";
import SuppliersContext from "../context/SuppliersContext";
import validationsSchemas from "../utils/validationsSchemas";
import initialsValues from "../utils/initialsValues";
import {
  Form,
  FormTextField,
  FormSelectField,
  FormSupplierSelectField,
  FormSubmitButton,
} from "../components/forms";

const SubmitProductFormDialog = ({ show, dismiss, handleSubmit }) => {
  const { constants } = useContext(ConstantsContext);
  const { suppliers } = useContext(SuppliersContext);

  return (
    <Dialog open={show}>
      <DialogContent>
        {constants.HEB && (
          <Form
            initialValues={initialsValues.product}
            validationSchema={validationsSchemas.product}
            onSubmit={(values) => handleSubmit(values)}
          >
            <form>
              {/** product */}
              <h3>Product</h3>
              <div className="inputs-container">
                {/** name */}
                <FormTextField label="Name" name="pName" />
                {/** include in monthly inventory */}
                <div className="right-input">
                  <label>
                    <Field type="checkbox" name="includeInMonthlyInventory" />
                    Include in monthly inventory table
                  </label>
                </div>
              </div>
              {/** more product */}
              <div className="inputs-container">
                {/** price */}
                <FormTextField label="Price" name="price" type="number" />
                {/** value in sales */}
                <div className="right-input">
                  <FormTextField
                    label="Value in sales"
                    name="valueInSales"
                    type="number"
                  />
                </div>
              </div>
              {/** supplier */}
              <h3 className="input-title">Supplier</h3>
              <div className="inputs-container">
                {/** name */}
                <FormSupplierSelectField
                  label="Name"
                  name="supplier"
                  suppliers={suppliers}
                />
              </div>
              {/** sizes */}
              <h3 className="input-title">Sizes</h3>
              {/** inventory */}
              <h4 className="input-title">Inventory</h4>
              <div className="inputs-container">
                {/** stock daily */}
                <FormSelectField
                  label="Stock daily"
                  name="stockDaily"
                  options={constants.HEB.SIZES.TYPES}
                />
                {/** stock monthly */}
                <div className="middle-input">
                  <FormSelectField
                    label="Stock monthly"
                    name="stockMonthly"
                    options={constants.HEB.SIZES.TYPES}
                  />
                </div>
                {/** in order */}
                <FormSelectField
                  label="In order"
                  name="inOrder"
                  options={constants.HEB.SIZES.TYPES}
                />
              </div>
              {/** values */}
              <h4 className="input-title">Values</h4>
              <div className="inputs-container">
                {/** kg */}
                <FormTextField label="Kg" name="kg" type="number" />
                {/** box */}
                <div className="middle-input">
                  <FormTextField label="Box" name="box" type="number" />
                </div>
                {/** unit */}
                <FormTextField label="Unit" name="unit" type="number" />
              </div>
              {/** more values */}
              <div className="inputs-container">
                {/** third */}
                <FormTextField label="Third" name="third" type="number" />
                {/** dThird */}
                <div className="right-input">
                  <FormTextField
                    label="Double third"
                    name="dThird"
                    type="number"
                  />
                </div>
              </div>
              {/** more values */}
              <div className="inputs-container">
                {/** doughBox */}
                <FormTextField
                  label="Box dough"
                  name="boxDough"
                  type="number"
                />
                {/** ambat */}
                <div className="right-input">
                  <FormTextField label="Ambat" name="ambat" type="number" />
                </div>
              </div>
              {/** buttons */}
              <div className="form-buttons">
                <div className="button">
                  <FormSubmitButton />
                </div>
                <div className="button">
                  <Button variant="contained" onClick={dismiss}>
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SubmitProductFormDialog;

import "./style.css";
import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import ConstantsContext from "../../context/Constants";
import validationsSchemas from "../../utils/validationsSchemas";
import initialsValues from "../../utils/initialsValues";
import {
  Form,
  FormTextField,
  FormSelectField,
  FormSubmitButton,
} from "../../components/forms";

const SubmitProduct = ({ dismiss, handleSubmit }) => {
  const { constants } = useContext(ConstantsContext);

  return (
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
          {/** price */}
          <div className="middle-input">
            <FormTextField label="Price" name="price" type="number" />
          </div>
          {/** value in sales */}
          <FormTextField
            label="Value in sales"
            name="valueInSales"
            type="number"
          />
        </div>
        {/** supplier */}
        <h3 className="input-title">Supplier</h3>
        <div className="inputs-container">
          {/** name */}
          <div className="left-input">
            <FormTextField label="Name" name="sName" />
          </div>
          {/** type */}
          <FormSelectField
            label="Type"
            name="type"
            options={constants.HEB.SUPPLIER.TYPES}
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
            <FormTextField label="Double third" name="dThird" type="number" />
          </div>
        </div>
        {/** more values */}
        <div className="inputs-container">
          {/** doughBox */}
          <FormTextField label="Box dough" name="boxDough" type="number" />
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
  );
};

export default SubmitProduct;

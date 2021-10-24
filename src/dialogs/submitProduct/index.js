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
        <div className="product">
          <h3>Product</h3>
          <div className="product-inputs">
            {/** pName */}
            <FormTextField label="Name" name="pName" />
            {/** price */}
            <div className="middle-input">
              <FormTextField label="Price" name="price" type="number" />
            </div>
            {/** valueInSales */}
            <FormTextField
              label="Value in sales"
              name="valueInSales"
              type="number"
            />
          </div>
        </div>
        {/** supplier */}
        <div className="supplier">
          <h3>Supplier</h3>
          <div className="supplier-inputs">
            {/** sName */}
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
        </div>
        {/** sizes */}
        <div className="sizes">
          <h3>Sizes</h3>
          {/** inventory */}
          <div className="sizes-inventory">
            <h4>Inventory</h4>
            <div className="sizes-inventory-inputs">
              {/** stockDaily */}
              <FormSelectField
                label="Stock daily"
                name="stockDaily"
                options={constants.HEB.SIZES.TYPES}
              />
              {/** stockMonthly */}
              <div className="middle-input">
                <FormSelectField
                  label="Stock monthly"
                  name="stockMonthly"
                  options={constants.HEB.SIZES.TYPES}
                />
              </div>
              {/** inOrder */}
              <FormSelectField
                label="In order"
                name="inOrder"
                options={constants.HEB.SIZES.TYPES}
              />
            </div>
          </div>
          {/** values */}
          <div className="sizes-values">
            <h4>Values</h4>
            <div className="sizes-values-inputs">
              {/** kg */}
              <FormTextField label="Kg" name="kg" type="number" />
              {/** box */}
              <div className="middle-input">
                <FormTextField label="Box" name="box" type="number" />
              </div>
              {/** unit */}
              <FormTextField label="Unit" name="unit" type="number" />
            </div>
          </div>
          {/** more values */}
          <div className="sizes-values">
            <div className="sizes-values-inputs">
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
          </div>
          {/** more values */}
          <div className="sizes-values">
            <div className="sizes-values-inputs">
              {/** doughBox */}
              <FormTextField label="Box dough" name="boxDough" type="number" />
              {/** ambat */}
              <div className="right-input">
                <FormTextField label="Ambat" name="ambat" type="number" />
              </div>
            </div>
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

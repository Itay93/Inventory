import "./style.css";
import React, { useState } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

import FormTextField from "../../components/form/FormTextField";

const validationSchema = yup.object().shape({
  pName: yup.string().required("Required"),
  price: yup.number().required("Required"),
  valueInSales: yup.number().required("Required"),
  sName: yup.string().required("Required"),
  type: yup.string().required("Required"),
  stockDaily: yup.string().required("Required"),
  stockMonthly: yup.string().required("Required"),
  inOrder: yup.string().required("Required"),
  kg: yup.number().required("Required"),
  box: yup.number(),
  unit: yup.number(),
  third: yup.number(),
  dThird: yup.number(),
  doughBox: yup.number(),
  ambat: yup.number(),
});

const Products = () => {
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  return (
    <div className="content">
      <h1>Products</h1>
      <div className="buttons">
        <Button
          variant="contained"
          onClick={() => setShowSubmitDialog(!showSubmitDialog)}
        >
          Submit Product
        </Button>
        <Dialog open={showSubmitDialog}>
          <DialogContent>
            <Formik
              initialValues={{
                pName: "",
                price: "",
                valueInSales: "",
                sName: "",
                type: "",
                stockDaily: "",
                stockMonthly: "",
                inOrder: "",
                kg: "",
                box: "",
                unit: "",
                third: "",
                dThird: "",
                doughBox: "",
                ambat: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  {/** product */}
                  <div className="product">
                    <h3>Product</h3>
                    <div className="product-inputs">
                      {/** pName */}
                      <FormTextField label="Name" name="pName" />
                      {/** price */}
                      <div className="middle-input">
                        <FormTextField
                          label="Price"
                          name="price"
                          type="number"
                        />
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
                      <FormTextField label="Type" name="type" />
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
                        <FormTextField label="Stock daily" name="stockDaily" />
                        {/** stockMonthly */}
                        <div className="middle-input">
                          <FormTextField
                            label="Stock monthly"
                            name="stockMonthly"
                          />
                        </div>
                        {/** inOrder */}
                        <FormTextField label="In order" name="inOrder" />
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
                    <div className="sizes-values">
                      <div className="sizes-values-inputs">
                        {/** third */}
                        <FormTextField
                          label="Third"
                          name="third"
                          type="number"
                        />
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
                    <div className="sizes-values">
                      <div className="sizes-values-inputs">
                        {/** doughBox */}
                        <FormTextField
                          label="Dough box"
                          name="doughBox"
                          type="number"
                        />
                        {/** ambat */}
                        <div className="right-input">
                          <FormTextField
                            label="Ambat"
                            name="ambat"
                            type="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-buttons">
                    <div className="button">
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    </div>
                    <div className="button">
                      <Button
                        variant="contained"
                        onClick={() => setShowSubmitDialog(!showSubmitDialog)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Products;

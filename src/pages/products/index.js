import "./style.css";
import React, { useState } from "react";
import { TextField, Dialog, DialogContent, Button } from "@material-ui/core";
import { Formik } from "formik";
import * as yup from "yup";

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
                      <TextField
                        variant="filled"
                        id="pName"
                        name="pName"
                        label="Name"
                        value={values.pName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.pName && Boolean(errors.pName)}
                        helperText={touched.pName && errors.pName}
                      />
                      {/** price */}
                      <div className="middle-input">
                        <TextField
                          variant="filled"
                          type="number"
                          id="price"
                          name="price"
                          label="Price"
                          value={values.price}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.price && Boolean(errors.price)}
                          helperText={touched.price && errors.price}
                        />
                      </div>
                      {/** valueInSales */}
                      <TextField
                        variant="filled"
                        type="number"
                        id="valueInSales"
                        name="valueInSales"
                        label="Value in sales"
                        value={values.valueInSales}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                          touched.valueInSales && Boolean(errors.valueInSales)
                        }
                        helperText={touched.valueInSales && errors.valueInSales}
                      />
                    </div>
                  </div>
                  {/** supplier */}
                  <div className="supplier">
                    <h3>Supplier</h3>
                    <div className="supplier-inputs">
                      {/** sName */}
                      <div className="left-input">
                        <TextField
                          variant="filled"
                          id="sName"
                          name="sName"
                          label="Name"
                          value={values.sName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.sName && Boolean(errors.sName)}
                          helperText={touched.sName && errors.sName}
                        />
                      </div>
                      {/** type */}
                      <TextField
                        variant="filled"
                        id="type"
                        name="type"
                        label="Type"
                        value={values.type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.type && Boolean(errors.type)}
                        helperText={touched.type && errors.type}
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
                        <TextField
                          variant="filled"
                          id="stockDaily"
                          name="stockDaily"
                          label="Stock daily"
                          value={values.stockDaily}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.stockDaily && Boolean(errors.stockDaily)
                          }
                          helperText={touched.stockDaily && errors.stockDaily}
                        />
                        {/** stockMonthly */}
                        <div className="middle-input">
                          <TextField
                            variant="filled"
                            id="stockMonthly"
                            name="stockMonthly"
                            label="Stock monthly"
                            value={values.stockMonthly}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.stockMonthly &&
                              Boolean(errors.stockMonthly)
                            }
                            helperText={
                              touched.stockMonthly && errors.stockMonthly
                            }
                          />
                        </div>
                        {/** inOrder */}
                        <TextField
                          variant="filled"
                          id="inOrder"
                          name="inOrder"
                          label="In order"
                          value={values.inOrder}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.inOrder && Boolean(errors.inOrder)}
                          helperText={touched.inOrder && errors.inOrder}
                        />
                      </div>
                    </div>
                    {/** values */}
                    <div className="sizes-values">
                      <h4>Values</h4>
                      <div className="sizes-values-inputs">
                        {/** kg */}
                        <TextField
                          variant="filled"
                          id="kg"
                          name="kg"
                          type="number"
                          label="Kg"
                          value={values.kg}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.kg && Boolean(errors.kg)}
                          helperText={touched.kg && errors.kg}
                        />
                        {/** box */}
                        <div className="middle-input">
                          <TextField
                            variant="filled"
                            id="box"
                            type="number"
                            name="box"
                            label="Box"
                            value={values.box}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.box && Boolean(errors.box)}
                            helperText={touched.box && errors.box}
                          />
                        </div>
                        {/** unit */}
                        <TextField
                          variant="filled"
                          id="unit"
                          type="number"
                          name="unit"
                          label="Unit"
                          value={values.unit}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.unit && Boolean(errors.unit)}
                          helperText={touched.unit && errors.unit}
                        />
                      </div>
                    </div>
                    <div className="sizes-values">
                      <div className="sizes-values-inputs">
                        {/** third */}
                        <TextField
                          variant="filled"
                          id="third"
                          type="number"
                          name="third"
                          label="Third"
                          value={values.third}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.third && Boolean(errors.third)}
                          helperText={touched.third && errors.third}
                        />
                        {/** dThird */}
                        <div className="right-input">
                          <TextField
                            variant="filled"
                            id="dThird"
                            type="number"
                            name="dThird"
                            label="Double third"
                            value={values.dThird}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.dThird && Boolean(errors.dThird)}
                            helperText={touched.dThird && errors.dThird}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sizes-values">
                      <div className="sizes-values-inputs">
                        {/** doughBox */}
                        <TextField
                          variant="filled"
                          id="doughBox"
                          type="number"
                          name="doughBox"
                          label="Dough box"
                          value={values.doughBox}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.doughBox && Boolean(errors.doughBox)}
                          helperText={touched.doughBox && errors.doughBox}
                        />
                        {/** ambat */}
                        <div className="right-input">
                          <TextField
                            variant="filled"
                            id="ambat"
                            type="number"
                            name="ambat"
                            label="Ambat"
                            value={values.ambat}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.ambat && Boolean(errors.ambat)}
                            helperText={touched.ambat && errors.ambat}
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

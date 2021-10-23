import "./style.css";
import { Button } from "@material-ui/core";

import validationsSchemas from "../../utils/validationsSchemas";
import initialsValues from "../../utils/initialsValues";
import {
  Form,
  FormTextField,
  FormSelectField,
  FormSubmitButton,
} from "../../components/forms";

const types = ["יומי", "שבועי", "דו-שבועי", "מיוחד"];
const sizes = [
  'ק"ג',
  "יחידה",
  "קרטון",
  "שליש",
  "דאבל שליש",
  "קילו כדורים",
  "אמבטיה",
];

const SubmitProduct = ({ dismiss, handleSubmit }) => {
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
            <FormSelectField label="Type" name="type" options={types} />
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
                options={sizes}
              />
              {/** stockMonthly */}
              <div className="middle-input">
                <FormSelectField
                  label="Stock monthly"
                  name="stockMonthly"
                  options={sizes}
                />
              </div>
              {/** inOrder */}
              <FormSelectField
                label="In order"
                name="inOrder"
                options={sizes}
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
              <FormTextField label="Dough box" name="doughBox" type="number" />
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

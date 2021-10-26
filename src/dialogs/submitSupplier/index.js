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
  FormCheckbox,
  FormSubmitButton,
} from "../../components/forms";

const SubmitSupplier = ({ dismiss, handleSubmit }) => {
  const { constants } = useContext(ConstantsContext);

  return (
    <Form
      initialValues={initialsValues.supplier}
      validationSchema={validationsSchemas.supplier}
      onSubmit={(values) => handleSubmit(values)}
    >
      <form>
        <h3>General</h3>
        <div className="inputs-container">
          {/** name */}
          <FormTextField label="Name" name="name" />
          {/** type */}
          <div className="right-input">
            <FormSelectField
              label="Type"
              name="type"
              options={constants.HEB && constants.HEB.SUPPLIER.TYPES}
            />
          </div>
        </div>
        {/** order days */}
        <h3 className="input-title">Order</h3>
        <h5>Select one or more.</h5>
        <div className="checkbox-selection-container">
          <div role="group" aria-labelledby="checkbox-group">
            {constants.HEB &&
              constants.HEB.SUPPLIER.ORDER_DAYS.map((d) => {
                return <FormCheckbox name="orderDays" label={d} value={d} />;
              })}
          </div>
        </div>
        {/** delivery days */}
        <h3 className="input-title">Delivery</h3>
        <h5>Select one or more.</h5>
        <div className="checkbox-selection-container">
          <div role="group" aria-labelledby="checkbox-group">
            {constants.HEB &&
              constants.HEB.SUPPLIER.DELIVERY_DAYS.map((d) => {
                return <FormCheckbox name="deliveryDays" label={d} value={d} />;
              })}
          </div>
        </div>
        {/** communication */}
        <h3 className="input-title">Communication</h3>
        <div className="inputs-container">
          {/** sales agent */}
          <FormTextField label="Sales agent" name="salesAgent" />
          {/** number */}
          <div className="middle-input">
            <FormTextField label="Phone number" name="number" />
          </div>
          {/** order by */}
          <FormSelectField
            label="Order by"
            name="orderBy"
            options={constants.HEB.SUPPLIER.COMMUNICATION_OPTIONS}
          />
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

export default SubmitSupplier;

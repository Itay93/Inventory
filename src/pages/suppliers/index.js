import "./style.css";
import React, { useState, useContext } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import SuppliersContext from "../../context/Suppliers";
import suppliersService from "../../services/suppliers";
import LoadingOverlay from "../LoadingOverlay";
import SubmitSupplier from "../../dialogs/submitSupplier";

const Suppliers = () => {
  const { suppliers, setSuppliers } = useContext(SuppliersContext);

  const [loading, setLoading] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const handleSubmitSupplier = async (values) => {
    setShowSubmitDialog(false);
    setLoading(true);
    const response = await suppliersService.handlePostSupplier(values);
    setLoading(false);
    // error
    if (response.isError) return alert(response.error);
    // success
    setSuppliers([...suppliers, response]);
    alert("Supplier successfully saved!");
  };

  return (
    <div className="content">
      {loading && <LoadingOverlay />}
      <h1>Suppliers</h1>
      <div className="buttons">
        <Button variant="contained" onClick={() => setShowSubmitDialog(true)}>
          Submit Supplier
        </Button>
        <Dialog open={showSubmitDialog}>
          <DialogContent>
            <SubmitSupplier
              dismiss={() => setShowSubmitDialog(false)}
              handleSubmit={(values) => handleSubmitSupplier(values)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Suppliers;

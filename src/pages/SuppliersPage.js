import "../config/style.css";
import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";

import ConstantsContext from "../context/ConstantsContext";
import SuppliersContext from "../context/SuppliersContext";
import suppliersService from "../services/suppliersService";
import LoadingOverlay from "./LoadingOverlay";
import SubmitSupplierFormDialog from "../dialogs/SubmitSupplierFormDialog";
import SuppliersTable from "../components/tables/suppliers/SuppliersTable";
import DeleteAlertDialog from "../dialogs/DeleteAlertDialog";
import ErrorAlertDialog from "../dialogs/ErrorAlertDialog";

const Suppliers = () => {
  const { constants } = useContext(ConstantsContext);
  const { suppliers, setSuppliers } = useContext(SuppliersContext);

  const [currSid, setCurrSid] = useState("");

  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmitSupplier = async (values) => {
    setShowSubmitDialog(false);
    setLoading(true);
    const response = await suppliersService.handlePostSupplier(values);
    setLoading(false);
    if (response.isError) return handleError(response.error);
    setSuppliers([response, ...suppliers]);
  };

  const handleDeleteSupplier = async () => {
    setShowDeleteDialog(false);
    setLoading(true);
    const response = await suppliersService.handleDeleteSupplier(currSid);
    setLoading(false);
    if (response.isError) return handleError(response.error);
    setSuppliers((currSuppliers) => {
      return currSuppliers.filter((s) => s._id !== currSid);
    });
  };

  const handleError = (err) => {
    setIsError(true);
    setError(err);
  };

  return (
    <div className="content-container">
      {loading && <LoadingOverlay />}
      {isError && (
        <ErrorAlertDialog message={error} onDismiss={() => setIsError(false)} />
      )}
      {/** submit */}
      <div className="buttons">
        <Button variant="contained" onClick={() => setShowSubmitDialog(true)}>
          הוסף ספק
        </Button>
        <SubmitSupplierFormDialog
          show={showSubmitDialog}
          dismiss={() => setShowSubmitDialog(false)}
          handleSubmit={(values) => handleSubmitSupplier(values)}
        />
      </div>
      {/** table */}
      {constants.HEB && suppliers && (
        <div className="products-table-container">
          <SuppliersTable
            columns={constants.HEB.SUPPLIERS_TABLE_COLUMNS}
            data={suppliers}
            onDelete={(sId) => {
              setCurrSid(sId);
              setShowDeleteDialog(true);
            }}
          />
          <DeleteAlertDialog
            show={showDeleteDialog}
            onDelete={handleDeleteSupplier}
            onDismiss={() => setShowDeleteDialog(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Suppliers;

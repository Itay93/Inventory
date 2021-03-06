import "../config/style.css";
import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";

import ConstantsContext from "../context/ConstantsContext";
import SuppliersContext from "../context/SuppliersContext";
import suppliersService from "../services/suppliersService";
import SubmitSupplierFormDialog from "../dialogs/SubmitSupplierFormDialog";
import SuppliersTable from "../components/tables/suppliers/SuppliersTable";
import LoadingAlertDialog from "../dialogs/LoadingAlertDialog";
import DeleteAlertDialog from "../dialogs/DeleteAlertDialog";
import ErrorAlertDialog from "../dialogs/ErrorAlertDialog";

const Suppliers = () => {
  const { constants } = useContext(ConstantsContext);
  const { suppliers, setSuppliers } = useContext(SuppliersContext);

  const [currSid, setCurrSid] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    searchQuery !== "" ? handleSearch() : setSearchResults([]);
  }, [searchQuery]);

  const handleSearch = () => {
    setSearchResults(
      suppliers.filter((s) => {
        return s.name.search(searchQuery) !== -1;
      })
    );
  };

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
      {loading && <LoadingAlertDialog />}
      {isError && (
        <ErrorAlertDialog message={error} onDismiss={() => setIsError(false)} />
      )}
      {/** search, submit */}
      {/** search */}
      <div className="search-button-container">
        <div className="search-container">
          <TextField
            variant="filled"
            label="??????????"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        {/** submit */}
        <Button variant="contained" onClick={() => setShowSubmitDialog(true)}>
          ???????? ??????
        </Button>
        <SubmitSupplierFormDialog
          show={showSubmitDialog}
          dismiss={() => setShowSubmitDialog(false)}
          handleSubmit={(values) => handleSubmitSupplier(values)}
        />
      </div>
      {/** table */}
      {constants.HEB && suppliers && (
        <div className="table-container">
          <SuppliersTable
            columns={constants.HEB.SUPPLIERS_TABLE_COLUMNS}
            data={searchQuery ? searchResults : suppliers}
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

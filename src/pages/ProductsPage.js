import "../config/style.css";
import React, { useState, useEffect, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import ConstantsContext from "../context/ConstantsContext";
import ProductsContext from "../context/ProductsContext";
import productsService from "../services/productsService";
import SubmitProductFormDialog from "../dialogs/SubmitProductFormDialog";
import LoadingOverlay from "./LoadingOverlay";
import ProductsTable from "../components/tables/products/ProductsTable";
import DeleteAlertDialog from "../dialogs/DeleteAlertDialog";
import ErrorAlertDialog from "../dialogs/ErrorAlertDialog";

const Products = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const [currPid, setCurrPid] = useState("");

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
      products.filter((p) => {
        return (
          p.product.name.search(searchQuery) !== -1 ||
          p.supplier.name.search(searchQuery) !== -1
        );
      })
    );
  };

  const handleSubmitProduct = async (values) => {
    setShowSubmitDialog(false);
    setLoading(true);
    const response = await productsService.handlePostProduct(values);
    setLoading(false);
    if (response.isError) return handleError(response.error);
    setProducts([response, ...products]);
  };

  const handleEditProduct = (e, p) => {
    productsService.handleEditProduct(e.id, e.value, p);
    setProducts([...products]);
  };

  const handlePatchProduct = async (p) => {
    setLoading(true);
    const response = await productsService.handlePatchProduct(p);
    setLoading(false);
    if (response.isError) return handleError(response.error);
  };

  const handleDeleteProduct = async () => {
    setShowDeleteDialog(false);
    setLoading(true);
    const response = await productsService.handleDeleteProduct(currPid);
    setLoading(false);
    if (response.isError) return handleError(response.error);
    setProducts((currProducts) => {
      return currProducts.filter((p) => p._id !== currPid);
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
      {/** search, submit */}
      {/** search */}
      <div className="search-button-container">
        <div className="search-container">
          <TextField
            variant="filled"
            label="חיפוש"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </div>
        {/** submit */}
        <Button variant="contained" onClick={() => setShowSubmitDialog(true)}>
          הוסף מוצר
        </Button>
        <SubmitProductFormDialog
          show={showSubmitDialog}
          dismiss={() => setShowSubmitDialog(false)}
          handleSubmit={(values) => handleSubmitProduct(values)}
        />
      </div>
      {/** table */}
      {constants.HEB && products && (
        <div className="table-container">
          <ProductsTable
            columns={constants.HEB.PRODUCTS_TABLE_COLUMNS}
            data={searchQuery ? searchResults : products}
            onEdit={(e, p) => handleEditProduct(e, p)}
            onPatch={(p) => handlePatchProduct(p)}
            onDelete={(pId) => {
              setCurrPid(pId);
              setShowDeleteDialog(true);
            }}
          />
          <DeleteAlertDialog
            show={showDeleteDialog}
            onDelete={handleDeleteProduct}
            onDismiss={() => setShowDeleteDialog(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Products;

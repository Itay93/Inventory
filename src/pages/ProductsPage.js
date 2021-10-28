import "../config/style.css";
import React, { useState, useEffect, useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import ConstantsContext from "../context/ConstantsContext";
import ProductsContext from "../context/ProductsContext";
import productsService from "../services/productsService";
import SubmitProductFormDialog from "../dialogs/SubmitProductFormDialog";
import LoadingOverlay from "./LoadingOverlay";
import ProductsTable from "../components/tables/products/ProductsTable";

const Products = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [loading, setLoading] = useState(false);

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
    // error
    if (response.isError) return alert(response.error);
    // success
    setProducts([response, ...products]);
    alert("Product successfully saved!");
  };

  return (
    <div className="content-container">
      {loading && <LoadingOverlay />}
      {/** search, submit */}
      {/** search */}
      <div className="search-button-container">
        <div className="search-container">
          <TextField
            variant="filled"
            label="חיפוש"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/** submit */}
        <div className="submit-button-container">
          <Button variant="contained" onClick={() => setShowSubmitDialog(true)}>
            הוסף מוצר
          </Button>
          <SubmitProductFormDialog
            show={showSubmitDialog}
            dismiss={() => setShowSubmitDialog(false)}
            handleSubmit={(values) => handleSubmitProduct(values)}
          />
        </div>
      </div>
      {/** table */}
      {constants.HEB && products && (
        <div className="products-table-container">
          <ProductsTable
            columns={constants.HEB.PRODUCTS_TABLE_COLUMNS}
            data={searchQuery ? searchResults : products}
          />
        </div>
      )}
    </div>
  );
};

export default Products;

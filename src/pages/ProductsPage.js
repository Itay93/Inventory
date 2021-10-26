import "../config/style.css";
import React, { useState, useContext } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import ConstantsContext from "../context/ConstantsContext";
import ProductsContext from "../context/ProductsContext";
import productsService from "../services/productsService";
import SubmitProduct from "../dialogs/SubmitProductDialog";
import LoadingOverlay from "./LoadingOverlay";
import ProductsTable from "../components/tables/products/ProductsTable";

const Products = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

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
    <div className="content">
      {loading && <LoadingOverlay />}
      <div className="buttons">
        <Button variant="contained" onClick={() => setShowSubmitDialog(true)}>
          Submit Product
        </Button>
        <Dialog open={showSubmitDialog}>
          <DialogContent>
            <SubmitProduct
              dismiss={() => setShowSubmitDialog(false)}
              handleSubmit={(values) => handleSubmitProduct(values)}
            />
          </DialogContent>
        </Dialog>
      </div>
      {constants.HEB && products && (
        <div className="products-table-container">
          <ProductsTable
            columns={constants.HEB.PRODUCTS_TABLE_COLUMNS}
            data={products}
          />
        </div>
      )}
    </div>
  );
};

export default Products;

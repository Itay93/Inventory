import "./style.css";
import React, { useState, useContext } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import ConstantsContext from "../../context/Constants";
import ProductsContext from "../../context/Products";
import productsService from "../../services/products";
import SubmitProduct from "../../dialogs/submitProduct";
import LoadingOverlay from "../LoadingOverlay";
import ProductsTable from "../../components/tables/products/ProductsTable";

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
      <h1>Products</h1>
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

import "./style.css";
import React, { useState } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import productsService from "../../services/products";
import SubmitProduct from "../../dialogs/submitProduct";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const handleSubmitProduct = async (values) => {
    setLoading(true);
    const response = await productsService.handlePostProduct(values);
    setLoading(false);
    // error
    if (response.isError) return alert(response.error);
    // success
    setShowSubmitDialog(false);
    alert("Product successfully saved!");
  };

  return (
    <div className="content">
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
    </div>
  );
};

export default Products;

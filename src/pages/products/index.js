import "./style.css";
import React, { useState } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import productsService from "../../services/products";
import SubmitProduct from "../../dialogs/submitProduct";

const Products = () => {
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const handleSubmitProduct = async (values) => {
    const response = await productsService.handlePostProduct(values);
    if (response.isError) return alert(response.error);
    setShowSubmitDialog(false);
    alert("Success!");
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

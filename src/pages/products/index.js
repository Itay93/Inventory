import "./style.css";
import React, { useState } from "react";
import { Dialog, DialogContent, Button } from "@material-ui/core";

import SubmitProduct from "../../dialogs/SubmitProduct";

const Products = () => {
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

  const handleSubmitProduct = (values) => {
    setShowSubmitDialog(false);
    console.log(values);
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

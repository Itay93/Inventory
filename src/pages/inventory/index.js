import "./style.css";
import React, { useContext } from "react";

import ConstantsContext from "../../context/Constants";
import ProductsContext from "../../context/Products";
import productsService from "../../services/products";
import Daily from "../../components/tables/daily/Daily";

const Inventory = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const handleInputChange = (e, index) => {
    setProducts(
      productsService.handleInputChange(e.id, e.value, index, products)
    );
  };

  return (
    <div className="content">
      <h1>Inventory</h1>
      <div className="table-container">
        {constants.HEB && products && (
          <Daily
            columns={constants.HEB.DAILY_TABLE_COLUMNS}
            data={products}
            onInputChange={(e, index) => handleInputChange(e, index)}
          />
        )}
      </div>
    </div>
  );
};

export default Inventory;

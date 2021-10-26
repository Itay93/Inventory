import "./style.css";
import React, { useContext, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";

import ConstantsContext from "../../context/Constants";
import ProductsContext from "../../context/Products";
import productsService from "../../services/products";
import InventoryTable from "../../components/tables/inventory/InventoryTable";
import TabPanel from "../../components/TabPanel";

const Inventory = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const [tabIndex, setTabIndex] = useState(0);

  const handleInputChange = (e, pId) => {
    setProducts(
      productsService.handleInputChange(e.id, e.value, pId, products)
    );
  };

  return (
    <div className="inventory-container">
      <Tabs value={tabIndex} onChange={(e, value) => setTabIndex(value)}>
        {constants.HEB &&
          constants.HEB.INVENTORY.TABLES_OPTIONS.map((o) => {
            return <Tab label={o} />;
          })}
      </Tabs>
      {constants.HEB &&
        products &&
        constants.HEB.SUPPLIER.TYPES.map((t, index) => {
          return (
            <TabPanel value={tabIndex} index={index}>
              <div className="table-container">
                <InventoryTable
                  columns={constants.HEB.INVENTORY.TABLES_COLUMNS}
                  data={products.filter((p) => {
                    return p.supplier.type === t;
                  })}
                  onInputChange={(e, pId) => handleInputChange(e, pId)}
                />
              </div>
            </TabPanel>
          );
        })}
    </div>
  );
};

export default Inventory;

import "../config/style.css";
import React, { useContext, useState } from "react";
import { Tabs, Tab, TextField } from "@material-ui/core";

import ConstantsContext from "../context/ConstantsContext";
import ProductsContext from "../context/ProductsContext";
import productsService from "../services/productsService";
import InventoryTable from "../components/tables/inventory/InventoryTable";
import TabPanel from "../components/TabPanel";

const Inventory = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const [expectedSales, setExpectedSales] = useState(0);

  const [tabIndex, setTabIndex] = useState(0);

  const handleExpectedSalesChange = (value) => {
    setExpectedSales(value);
    productsService.handleExpectedSalesChange(value, products);
  };

  const handleInputsChange = (e, p) => {
    productsService.handleInputsChange(e.id, e.value, p, expectedSales);
    setProducts([...products]);
  };

  return (
    <div className="content-container">
      {/** expected sales */}
      <div className="expected-sales-container">
        <TextField
          value={expectedSales}
          onChange={(e) => handleExpectedSalesChange(e.target.value)}
          variant="filled"
          type="number"
          label="צפי מכירות"
          InputLabelProps={{ shrink: true }}
        />
      </div>
      {/** tabs */}
      <div className="tabs-container">
        <Tabs value={tabIndex} onChange={(e, value) => setTabIndex(value)}>
          {constants.HEB &&
            constants.HEB.INVENTORY.TABLES_OPTIONS.map((o) => {
              return <Tab label={o} />;
            })}
        </Tabs>
      </div>
      {/** tables */}
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
                  onInputChange={(e, p) => handleInputsChange(e, p)}
                />
              </div>
            </TabPanel>
          );
        })}
    </div>
  );
};

export default Inventory;

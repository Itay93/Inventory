import "./style.css";
import React, { useContext, useState } from "react";
import { Tabs, Tab } from "@material-ui/core";

import ConstantsContext from "../../context/Constants";
import ProductsContext from "../../context/Products";
import productsService from "../../services/products";
import Daily from "../../components/tables/daily/Daily";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const Inventory = () => {
  const { constants } = useContext(ConstantsContext);
  const { products, setProducts } = useContext(ProductsContext);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (e, pId) => {
    setProducts(
      productsService.handleInputChange(e.id, e.value, pId, products)
    );
  };

  return (
    <div className="inventory-container">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="יומית" />
        <Tab label="שבועית" />
        <Tab label="דו-שבועית" />
        <Tab label="מיוחדת" />
        <Tab label="חודשית" />
      </Tabs>
      {/** daily */}
      <TabPanel value={value} index={0}>
        <div className="table-container">
          {constants.HEB && products && (
            <Daily
              columns={constants.HEB.DAILY_TABLE_COLUMNS}
              data={products.filter((p) => {
                return p.supplier.type === "יומי";
              })}
              onInputChange={(e, pId) => handleInputChange(e, pId)}
            />
          )}
        </div>
      </TabPanel>
      {/** week */}
      <TabPanel value={value} index={1}>
        <div className="table-container">
          {constants.HEB && products && (
            <Daily
              columns={constants.HEB.DAILY_TABLE_COLUMNS}
              data={products.filter((p) => {
                return p.supplier.type === "שבועי";
              })}
              onInputChange={(e, pId) => handleInputChange(e, pId)}
            />
          )}
        </div>
      </TabPanel>
      {/** two weeks */}
      <TabPanel value={value} index={2}>
        <div className="table-container">
          {constants.HEB && products && (
            <Daily
              columns={constants.HEB.DAILY_TABLE_COLUMNS}
              data={products.filter((p) => {
                return p.supplier.type === "דו-שבועי";
              })}
              onInputChange={(e, pId) => handleInputChange(e, pId)}
            />
          )}
        </div>
      </TabPanel>
      {/** uniq */}
      <TabPanel value={value} index={3}>
        <div className="table-container">
          {constants.HEB && products && (
            <Daily
              columns={constants.HEB.DAILY_TABLE_COLUMNS}
              data={products.filter((p) => {
                return p.supplier.type === "מיוחד";
              })}
              onInputChange={(e, pId) => handleInputChange(e, pId)}
            />
          )}
        </div>
      </TabPanel>
      {/** monthly */}
      <TabPanel value={value} index={4}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default Inventory;

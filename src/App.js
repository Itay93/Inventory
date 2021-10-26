import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ConstantsContext from "./context/Constants";
import constantsService from "./services/constants";
import ProductsContext from "./context/Products";
import productsService from "./services/products";
import SuppliersContext from "./context/Suppliers";
import suppliersService from "./services/suppliers";
import Navbar from "./router/navbar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Suppliers from "./pages/suppliers";
import Inventory from "./pages/inventory";

const App = () => {
  const [constants, setConstants] = useState({});
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    loadAppData();
  }, []);

  const loadAppData = async () => {
    await loadConstants();
    await loadProducts();
    await loadSuppliers();
  };

  const loadConstants = async () => {
    const response = await constantsService.handleGetConstants();
    if (response.isError) return alert(response.error);
    setConstants(response);
  };

  const loadProducts = async () => {
    const response = await productsService.handleGetProducts();
    if (response.isError) return alert(response.error);
    setProducts(response);
  };

  const loadSuppliers = async () => {
    const response = await suppliersService.handleGetSuppliers();
    if (response.isError) return alert(response.error);
    setSuppliers(response);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <ConstantsContext.Provider value={{ constants }}>
              <ProductsContext.Provider value={{ products, setProducts }}>
                <SuppliersContext.Provider value={{ suppliers, setSuppliers }}>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  <Route path="/products">
                    <Products />
                  </Route>
                  <Route path="/suppliers">
                    <Suppliers />
                  </Route>
                  <Route path="/inventory">
                    <Inventory />
                  </Route>
                </SuppliersContext.Provider>
              </ProductsContext.Provider>
            </ConstantsContext.Provider>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ConstantsContext from "./context/Constants";
import ProductsContext from "./context/Products";
import constantsService from "./services/constants";
import productsService from "./services/products";
import Navbar from "./router/navbar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Suppliers from "./pages/suppliers";
import Inventory from "./pages/inventory";

const App = () => {
  const [constants, setConstants] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadConstants();
    loadProducts();
  }, []);

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

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <ConstantsContext.Provider value={{ constants }}>
              <ProductsContext.Provider value={{ products, setProducts }}>
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
              </ProductsContext.Provider>
            </ConstantsContext.Provider>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

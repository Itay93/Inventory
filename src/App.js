import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ConstantsContext from "./context/ConstantsContext";
import constantsService from "./services/constantsService";
import ProductsContext from "./context/ProductsContext";
import productsService from "./services/productsService";
import SuppliersContext from "./context/SuppliersContext";
import suppliersService from "./services/suppliersService";
import Navbar from "./router/Navbar";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import SuppliersPage from "./pages/SuppliersPage";
import InventoryPage from "./pages/InventoryPage";
import LoadingAlertDialog from "./dialogs/LoadingAlertDialog";
import ErrorAlertDialog from "./dialogs/ErrorAlertDialog";

const App = () => {
  const [constants, setConstants] = useState({});
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await loadConstants();
    await loadProducts();
    await loadSuppliers();
    setLoading(false);
  };

  const loadConstants = async () => {
    const response = await constantsService.handleGetConstants();
    if (response.isError) return handleError(response.error);
    setConstants(response);
  };

  const loadProducts = async () => {
    const response = await productsService.handleGetProducts();
    if (response.isError) return handleError(response.error);
    setProducts(response);
  };

  const loadSuppliers = async () => {
    const response = await suppliersService.handleGetSuppliers();
    if (response.isError) return handleError(response.error);
    setSuppliers(response);
  };

  const handleError = (message) => {
    setIsError(true);
    setErrors((err) => err.concat(`${message}`));
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          {loading && <LoadingAlertDialog />}
          {isError && (
            <ErrorAlertDialog
              message={errors}
              onDismiss={() => setIsError(false)}
            />
          )}
          <Switch>
            <ConstantsContext.Provider value={{ constants }}>
              <ProductsContext.Provider value={{ products, setProducts }}>
                <SuppliersContext.Provider value={{ suppliers, setSuppliers }}>
                  <Route exact path="/">
                    <DashboardPage />
                  </Route>
                  <Route path="/products">
                    <ProductsPage />
                  </Route>
                  <Route path="/suppliers">
                    <SuppliersPage />
                  </Route>
                  <Route path="/inventory">
                    <InventoryPage />
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

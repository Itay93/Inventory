import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ConstantsContext from "./context/Constants";
import constantsService from "./services/constants";
import Navbar from "./router/navbar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Suppliers from "./pages/suppliers";
import DailyInventory from "./pages/dailyInventory";

const App = () => {
  const [constants, setConstants] = useState({});

  useEffect(() => {
    loadConstants();
  }, []);

  const loadConstants = async () => {
    const response = await constantsService.handleGetConstants();
    if (response.isError) return alert(response.error);
    setConstants(response);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <ConstantsContext.Provider value={{ constants }}>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/suppliers">
                <Suppliers />
              </Route>
              <Route path="/dailyInventory">
                <DailyInventory />
              </Route>
            </ConstantsContext.Provider>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

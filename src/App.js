import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./router/navbar";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Suppliers from "./pages/suppliers";
import DailyInventory from "./pages/dailyInventory";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

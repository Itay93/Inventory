import "./style.css";
import { Link } from "react-router-dom";

import routes from "../routes";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Inventory</h1>
      <div className="links">
        <Link to="/">{routes.DASHBOARD}</Link>
        <Link to="/products">{routes.PRODUCTS}</Link>
        <Link to="/suppliers">{routes.SUPPLIERS}</Link>
        <Link to="/dailyInventory">{routes.DAILY_INVENTORY}</Link>
      </div>
    </nav>
  );
};

export default Navbar;

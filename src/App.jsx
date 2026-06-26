import React from "react";
import TopBar from "./component/TopBar";
import Sidebar from "./component/Sidebar";
import RecentOrders from "./component/RecentOrders";
import RevenueChart from "./component/RevenueChart";
import StatusBadge from "./component/StatusBadge";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Overview from "./Page/Overview";
import Products from "./Page/ProductPage";
import CustomerPage from "./Page/CustomerPage";
import SettingsPage from "./Page/SettingsPage";
import { useProducts } from "./context/ProductContext";

const App = () => {
  const { products } = useProducts();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/orders" element={<Products />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
};

export default App;

import React from "react";
import TopBar from "./component/TopBar";
import Sidebar from "./component/Sidebar";
import RecentOrders from "./component/RecentOrders";
import RevenueChart from "./component/RevenueChart";
import StatusBadge from "./component/StatusBadge";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Overview from "./component/Overview";
import Products from "./component/Products";
import CustomerPage from "./component/CustomerPage";
import SettingsPage from "./component/SettingsPage";

const App = () => {
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

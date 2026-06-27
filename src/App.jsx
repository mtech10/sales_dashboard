import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./component/Layout";
import Overview from "./Page/Overview";
import ProductPage from "./Page/ProductPage";
import CustomerPage from "./Page/CustomerPage";
import SettingsPage from "./Page/SettingsPage";
import { useProducts } from "./context/ProductContext";

const App = () => {
  const { products } = useProducts();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/orders" element={<ProductPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;

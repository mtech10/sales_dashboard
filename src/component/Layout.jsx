import React from "react";
import Sidebar from "../component/Sidebar";
import TopBar from "../component/TopBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <main className="space-y-6 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

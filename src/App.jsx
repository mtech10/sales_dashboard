import React from "react";
import StatCard from "./component/StatCard";
import Sidebar from "./component/Sidebar";
import TopBar from "./component/TopBar";

const App = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
      </div>
    </div>
  );
};

export default App;

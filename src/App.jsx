// import React from "react";
// import StatCard from "./component/StatCard";
// import Sidebar from "./component/Sidebar";
// import TopBar from "./component/TopBar";

// const App = () => {
//   return (
//     <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
//       <Sidebar />
//       <div className="flex-1">
//         <TopBar />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import TopBar from "./component/TopBar";
import Sidebar from "./component/Sidebar";
import RecentOrders from "./component/RecentOrders";
import RevenueChart from "./component/RevenueChart";

const App = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <main className="space-y-6 p-6">
          <div className="grid grid-cols-4"></div>
          <RevenueChart />
          <RecentOrders />
        </main>
      </div>
    </div>
  );
};

export default App;

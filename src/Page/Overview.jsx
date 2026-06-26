import React from "react";
import { stats } from "../data/data";
import RevenueChart from "../component/RevenueChart";
import RecentOrders from "../component/RecentOrders";
const Overview = () => {
  return (
    <>
      {/* <div>
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div> */}
      <RevenueChart />
      <RecentOrders />
    </>
  );
};

export default Overview;

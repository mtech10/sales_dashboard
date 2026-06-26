import React from "react";
import { stats } from "../data/data";
import RevenueChart from "../component/RevenueChart";
import RecentOrders from "../component/RecentOrders";
import StatCard from "../component/StatCard";
const Overview = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      {/* <StatCard /> */}
      <RevenueChart />
      <RecentOrders />
    </>
  );
};

export default Overview;

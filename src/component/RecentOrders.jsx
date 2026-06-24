import React, { useState } from "react";
import { orders } from "../data/data";
import { Search } from "lucide-react";

const RecentOrders = () => {
  const [query, setQuery] = useState("");

  const filtered = orders.filter((order) =>
    order.customer.toLowerCase().includes(query.toLowerCase),
  );
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-sky-900">Recent Orders</h3>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1">
          <Search size={15} className="text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Customer..."
            className="text-sm outline-none placeholder:text-slate-400"
          />
        </div>
      </div>
      <table className="mt-4 w-full">
        <thead>
          <tr className="text-left text-slate-400">
            <th className="pb-2 font-medium">Order</th>
            <th className="pb-2 font-medium">Customer</th>
            <th className="pb-2 font-medium">Amount</th>
            <th className="pb-2 font-medium">Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default RecentOrders;

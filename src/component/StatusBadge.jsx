import React from "react";

const StatusBadge = ({ status = "" }) => {
  const statusCase = status.toLowerCase();
  const colors = {
    Paid: "bg-emerald-100 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Failed: "bg-rose-100 text-rose-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;

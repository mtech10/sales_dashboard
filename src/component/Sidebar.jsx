// import React, { useState } from "react";
// import { navItems } from "../data/data";

// const Sidebar = () => {
//   const [activeName, setActiveName] = useState(navItems[0]?.name);
//   return (
//     <aside className="flex w-60 flex-col border-r border-slate-200 bg-white p-5">
//       <div className="flex items-center gap-2 px-2">
//         <div className="w-8 h-8 rounded-lg bg-indigo-600" />
//         <span className="text-lg font-semibold text-slate-900">Soul</span>
//       </div>
//       <nav className="mt-8 flex flex-col gap-1">
//         {navItems.map((navItem) => {
//           const Icon = navItem.icon;
//           const isActive = navItem.name === activeName;

//           return (
//             <button
//               key={navItem.id}
//               onClick={() => {
//                 setActiveName(navItem.name);
//               }}
//               className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-500 hover:bg-slate-50"}`}
//             >
//               <Icon size={18} />
//               {navItem.name}
//             </button>
//           );
//         })}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { navItems } from "../data/data";

const Sidebar = () => {
  const [active, setActive] = useState("Overview");
  return (
    <aside className="flex w-60 flex-col border border-slate-200 bg-white p-5">
      <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-600" />
        <span className="text-lg font-semibold text-slate-900"> Soul</span>
      </div>
      <nav className="flex flex-col mt-8">
        {navItems.map((navItem) => {
          const Id = navItem.id;
          const Icon = navItem.icon;
          const isActive = navItem.name === active;

          return (
            <button
              key={Id}
              onClick={() => setActive(navItem.name)}
              className={`flex items-center gap-3 rounded-lg py-2 text-sm font-medium ${isActive ? "bg-indigo-50 text-indigo-700" : "text-slate-500 hover:bg-slate-50"}`}
            >
              <Icon size={18} />
              {navItem.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;

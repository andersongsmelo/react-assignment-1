import React, { useState } from "react";

interface ListProps {
  activeItems?: string[];
  inactiveItems?: string[];
}

function List({ activeItems = [], inactiveItems = [] }: ListProps) {
  const [filter, setFilter] = useState("active");

  return (
    <div className="border border-slate-700 bg-slate-900 text-slate-100 p-6 m-5 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-emerald-400">
        Shopping Cart
      </h2>

      {/* Filter Navigation Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 border ${
            filter === "active"
              ? "bg-emerald-600 border-emerald-500 text-white shadow-md scale-105"
              : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          Show Active
        </button>

        <button
          onClick={() => setFilter("inactive")}
          className={`px-4 py-2 rounded-xl font-bold transition-all duration-200 border ${
            filter === "inactive"
              ? "bg-emerald-600 border-emerald-500 text-white shadow-md scale-105"
              : "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          Show Inactive
        </button>
      </div>

      {/* Conditional rendering of filtered lists */}
      {filter === "active" && (
        <div>
          <h3 className="font-bold text-lg text-emerald-400 mb-3">
            Active Items:
          </h3>
          <ul className="bg-slate-800 border border-slate-700 p-4 rounded-xl space-y-2">
            {activeItems.map((item, index) => (
              <li
                key={index}
                className="text-slate-200 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {filter === "inactive" && (
        <div>
          <h2 className="font-bold text-lg text-rose-400 mb-3">
            Inactive Items:
          </h2>
          <ul className="bg-slate-800 border border-slate-700 p-4 rounded-xl space-y-2">
            {inactiveItems.map((item, index) => (
              <li
                key={index}
                className="text-slate-400 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default List;

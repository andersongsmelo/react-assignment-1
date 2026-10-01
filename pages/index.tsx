import React, { useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import List from "../components/List";

export default function Home() {
  // State to control active tab/view
  const [activeTab, setActiveTab] = useState("home");

  // Sample data to pass via props
  const activeProducts: string[] = [
    'MacBook Pro 16" (In Stock)',
    "Dell XPS 15 (In Stock)",
    "Sony WH-1000XM5 Headphones (In Stock)",
    "Logitech MX Master 3S (In Stock)",
    'LG UltraGear 27" Monitor (In Stock)',
  ];
  const inactiveProducts: string[] = [
    "Keychron K2 Keyboard (Out of Stock)",
    "Anker USB-C Hub (Discontinued)",
    "Standing Desk Converter (Out of Stock)",
    "Webcam 4K Pro (Backordered)",
    "Ergonomic Chair (Out of Stock)",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      {/* Navigation Menu */}
      <nav className="bg-slate-900 p-4 rounded-2xl shadow-xl mb-8 flex flex-col sm:flex-row justify-between items-center border border-slate-800 gap-4">
        <h1 className="text-xl font-bold text-emerald-400 tracking-wide">
          Front-End App
        </h1>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeTab === "home"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab("counter")}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeTab === "counter"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Counter
          </button>
          <button
            onClick={() => setActiveTab("form")}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeTab === "form"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            Form
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              activeTab === "list"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
          >
            List
          </button>
        </div>
      </nav>

      {/* Main Content Rendered Conditionally */}
      <main className="max-w-3xl mx-auto">
        {activeTab === "home" && (
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl space-y-4">
            <h2 className="text-3xl font-bold text-emerald-400">
              Welcome to Assignment 1!
            </h2>
            <p className="text-slate-300 leading-relaxed">
              This web application showcases foundational React concepts
              including state management, passing data via props, event
              handling, and conditional rendering.
            </p>
            <p className="text-slate-400 text-sm">
              Use the navigation menu above to switch between different
              components.
            </p>
          </div>
        )}

        {/* Passing props to components */}
        {activeTab === "counter" && (
          <Counter title="Interactive Counter Component" initialCount={0} />
        )}
        {activeTab === "form" && <Form title="Interactive Feedback Form" />}
        {activeTab === "list" && (
          <List activeItems={activeProducts} inactiveItems={inactiveProducts} />
        )}
      </main>
    </div>
  );
}

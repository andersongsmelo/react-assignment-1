import React, { useState } from "react";

function Counter({ title = "Counter Program", initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-slate-700 bg-slate-900 text-slate-100 p-6 m-5 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-emerald-400">{title}</h2>

      <p className="font-bold text-xl mb-3">
        Counter: <span className="text-emerald-400">{count}</span>
      </p>

      <div className="flex items-center gap-2 mb-4">
        <label className="font-semibold text-slate-300">Step: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className="bg-slate-800 text-white rounded-lg text-center p-1 border border-slate-600 w-20 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setCount(count + step)}
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-2 px-4 rounded-xl transition-all shadow-md"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(Math.max(0, count - step))}
          disabled={count === 0}
          className="bg-slate-700 hover:bg-slate-600 disabled:opacity-40 text-white font-bold p-2 px-4 rounded-xl transition-all shadow-md"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-rose-600 hover:bg-rose-500 text-white font-bold p-2 px-4 rounded-xl transition-all shadow-md"
        >
          Reset
        </button>
      </div>

      <div className="border border-slate-700 bg-slate-800/60 p-4 rounded-xl">
        <h3 className="font-bold text-slate-200 mb-2">Program Description:</h3>
        {isVisible && (
          <div className="text-slate-300 space-y-2 text-sm leading-relaxed mb-4">
            <p>
              This Counter Program is a interactive React application designed
              to manage and track a numerical tally.
            </p>
            <p className="font-semibold text-blue-200">Button Functions:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-400">
              <li>
                <strong className="text-slate-200">Increment:</strong> Increases
                count by step.
              </li>
              <li>
                <strong className="text-slate-200">Decrement:</strong> Decreases
                count by step.
              </li>
              <li>
                <strong className="text-slate-200">Reset:</strong> Resets count
                to zero.
              </li>
            </ul>
          </div>
        )}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="border border-slate-600 bg-slate-700 hover:bg-slate-600 text-white p-2 px-4 rounded-xl font-semibold transition-all text-sm"
        >
          {isVisible ? "Hide Description" : "Show Description"}
        </button>
      </div>
    </div>
  );
}

export default Counter;

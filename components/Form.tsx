import React, { useState } from "react";

interface FormProps {
  title?: string;
}

function Form({ title = "Message Form" }: FormProps) {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // prevent page refresh

    // Validation Logic
    if (inputValue.trim() === "") {
      setMessage("Error: Input cannot be empty!");
      setIsSuccess(false);
      return;
    }

    setMessage("Form submitted successfully!");
    setIsSuccess(true);
    setInputValue("");
  };

  return (
    <div className="border border-slate-700 bg-slate-900 text-slate-100 p-6 m-5 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-emerald-400">{title}</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <label className="font-semibold text-slate-300">
          Write a message:{" "}
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-slate-800 text-white rounded-xl p-2.5 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-slate-500"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold p-2.5 rounded-xl transition-all shadow-md w-36"
        >
          Submit
        </button>
      </form>

      {/* Conditional feedback message */}
      {message && (
        <div
          className={`mt-4 p-3 rounded-xl border text-sm font-semibold ${isSuccess ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300" : "bg-rose-950/60 border-rose-500/50 text-rose-300"}`}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Form;

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const btnStyle = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200";
  
  return (
    <div className="flex flex-col bg-amber-600-100 p-10">
      <h1 className="text-3xl font-bold mb-4">Counter</h1>
      <p className="text-2xl mb-6">현재 값: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={handleIncrease}
          className={btnStyle}
        >
          +1
        </button>
        <button
          onClick={handleDecrease}
          className={btnStyle}
        >
          -1
        </button>
        <button
          onClick={handleReset}
          className={btnStyle}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  const nav = useNavigate();

  const handleMeal = (item) => {
    nav(`/${item}`);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-gray-200 p-4">
        <h1 className="border border-green-200 p-5 flex justify-center bg-yellow-50 rounded-full">
          Meals
        </h1>
        <div className="flex flex-col items-center p-10">
          {arr.map((item, index) => (
            <div className=" border border-blue-300  bg-red-200  w-80 rounded-full flex justify-center m-10 ">
              <button
                className="flex justify-center"
                key={index}
                onClick={() => handleMeal(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1 border-r"></div>

      <div className="w-1/2 bg-gray-300 p-4">
        <h1 className="bg-red-100 border border-green-200 rounded-full flex justify-center p-5">
          MEALS LIST
        </h1>
        <div className="flex justify-center">
          {/* Your content for "MEALS LIST" goes here */}
        </div>
      </div>
    </div>
  );
};

export default User;

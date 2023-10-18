import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from './apiActions';
import { useNavigate } from "react-router-dom";

const MealInfo = () => {
  const { param } = useParams();
  const Api = `https://www.themealdb.com/api/json/v1/1/search.php?f=${param}`;
  const dispatch = useDispatch();
  const arr = ["a", "b", "c", "d","e","f","g","h","i","j"];
  const nav = useNavigate();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axios.get(Api);
      const data = response.data;
      dispatch(getDetails(data));
    };
    fetchMeals();
  }, [Api, dispatch]);

  const mealDetails = useSelector((state) => state.details.finaldata);
  const Details = mealDetails && mealDetails.meals;
  console.log(Details);

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
        <div>
          {/* Render images under "MEALS LIST" */}
          {Details &&
            Details.map((item, index) => (
              <div key={index} className="text-center mt-4">
                <img className="w-32 h-32 mx-auto" src={item.strMealThumb} alt="" />
                <p>{item.strMeal}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MealInfo;

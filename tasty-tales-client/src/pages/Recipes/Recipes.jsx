import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const recipes = useLoaderData();
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_of_recipes,
    likes,
    chef_description,
    american_recipes,
  } = recipes;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const notify = () => {
    toast("Added to Favourite!");

    setIsButtonDisabled(true);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{chef_name}</h1>
            <p className="py-6">{chef_description}</p>
            <p className="flex items-center">
              <FaRegThumbsUp /> : {likes}
            </p>
            <p>Number of recipes : {num_of_recipes}</p>
            <p>Years of experience : {years_of_experience}</p>
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-bold text-center my-3">Different Recipes</h2>
      {american_recipes.map((recipes) => (
        <div key={recipes.recipe_name}>
          <div className="card my-5 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{recipes.recipe_name}</h2>

              <p>
                Ingredients : {recipes.ingredients[0]},{recipes.ingredients[1]},{" "}
                {recipes.ingredients[2]}, {recipes.ingredients[3]},{" "}
                {recipes.ingredients[4]}
              </p>
              <p>Cooking Method : {recipes.cooking_method}</p>
              <p>Rating : {recipes.rating}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => notify(isButtonDisabled)}
                  disabled={isButtonDisabled}
                  className="btn btn-primary"
                >
                  Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;

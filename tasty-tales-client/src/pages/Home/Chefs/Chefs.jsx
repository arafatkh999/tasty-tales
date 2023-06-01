import React, { useContext, useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
  const {loading} = useContext(AuthContext);

  useEffect(() => {
    fetch("https://tasty-tales-server-arafatkh999.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);

  if(loading){
    return <button className="btn loading">loading</button>
  }
  else{
    return (
      <div className="container">
        <h2 className="text-center text-5xl">Best Chefs in the town</h2>
        
  
  
        {chefs.map((chef) => (
          <div key={chef.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
              <figure>
                <img className='w-40'
                  src={chef.chef_picture}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{chef.chef_name}</h2>
                <p>Experience : {chef.years_of_experience} years</p>
                <p>Recipes : {chef.num_of_recipes}</p>
                <p className="flex items-center"> <FaRegThumbsUp/> : {chef.likes}</p>
                <div className="card-actions justify-end">
                  <Link to={`/chef/${chef.id}`}>
                  <button className="btn btn-primary">View Recipes</button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
};

export default Chefs;

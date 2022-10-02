import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `  https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_API}&query=${name}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      {searchedRecipes.map((item) => {
        return (
          <Link to={/recipe/ + item.id}>
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Searched;

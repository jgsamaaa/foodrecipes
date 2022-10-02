import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `  https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_FOOD_API}&cuisine=${name}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
      {cuisine.map((item) => {
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

export default Cuisine;

import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      // NOTE APi key here.
      const api = await fetch(
        ` https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_FOOD_API}&number=10&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data);
    }
  };
  return (
    <div className="bg-blue-200">
      <h3>Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          type: 'loop',
        }}
      >
        {veggie.map((recipe) => {
          return (
            // NOTE div wrapper
            <SplideSlide key={recipe.id}>
              <div className="mx-auto my-10">
                {/* NOTE Card div */}
                <Link to={'/recipe/' + recipe.id}>
                  <div className="min-h-[25rem] rounded-3xl  mt-32">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className=" rounded-2xl w-[95%] h-[95%]"
                    />
                    <p className="max-w-sm py-4 font-bold text-center">
                      {recipe.title}
                    </p>
                  </div>
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Veggie;

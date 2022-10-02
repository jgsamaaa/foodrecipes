import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState('instructions');

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_FOOD_API}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      <div>
        <button
          className={activeTab === 'instructions' ? 'bg-blue-200' : ''}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
        <button
          onClick={() => setActiveTab('ingredients')}
          className={activeTab === 'ingredients' ? 'bg-blue-200' : ''}
        >
          Ingredients
        </button>
        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        <h3
          dangerouslySetInnerHTML={{ __html: details.instructions }}
          className="mt-5"
        ></h3>
      </div>
    </div>
  );
};

export default Recipe;

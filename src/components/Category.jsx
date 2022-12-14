import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <>
      <div className="flex items-center justify-center p-20 gap-x-36">
        <NavLink to={`/cuisine/Italian`}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </NavLink>
        <NavLink to={`/cuisine/American`}>
          <FaHamburger />
          <h4>American</h4>
        </NavLink>
        <NavLink to={`/cuisine/Thai`}>
          <GiNoodles />
          <h4>Thai</h4>
        </NavLink>
        <NavLink to={`/cuisine/Japan`}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </NavLink>
      </div>
    </>
  );
};

export default Category;

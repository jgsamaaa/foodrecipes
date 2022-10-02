import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <div className="w-screen my-auto bg-red-400">
      <form
        onSubmit={submitHandler}
        className="text-center relative w-full  text-white"
      >
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border-none w-[50%] bg-gradient-to-r from-[#494949] to-[#313131] outline-none text-2xl py-4 px-12 rounded-2xl pl-20 "
        />
      </form>
    </div>
  );
};

export default Search;

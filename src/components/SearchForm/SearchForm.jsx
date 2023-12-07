import React, { useState } from "react";

const SearchForm = ({ handleSubmit }) => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default SearchForm;
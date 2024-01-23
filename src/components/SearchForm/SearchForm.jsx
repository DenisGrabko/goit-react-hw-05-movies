import React, { useState } from "react";
import { SearchFormCustom } from "./SearchForm.styled";
import styles from "./SearchForm.module.css";

const SearchForm = ({ handleSubmit }) => {

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(!value) return;
    handleSubmit(value);
  }

  return (
    <SearchFormCustom onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
        
      />
      <div type="submit" className={styles['SearchForm-button']}>
      </div>

    </SearchFormCustom>
  )
}

export default SearchForm;
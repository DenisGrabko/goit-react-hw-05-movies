import React, { useState } from "react";
import styles from "./SearchForm.module.css";
import { SearchFormCustom, SearchButton } from "./SearchForm.styled";

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
    <div className={styles['Container']}>
    <SearchFormCustom onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}        
      />
      <SearchButton type="submit" className={styles['SearchForm-button']} onClick={onSubmit} />
      </SearchFormCustom>
    </div>
  )
}

export default SearchForm;
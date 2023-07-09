import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchProductList } from "../redux/productAction";
export default function SearchForm() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchProductList(searchText));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor='search'>Search</label>
      <input
        type='text'
        id='search'
        required
        placeholder='Write here about Product'
        value={searchText}
        onChange={handleChange}
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-right: 1rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    outline: none;
    padding: 0.25rem;
    border-radius: 5px;
    border: 1px solid #999999;
  }
`;

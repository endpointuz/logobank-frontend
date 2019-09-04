import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form } from '../simple';

const { SearchInput } = Form;

const SearchLogo = ({ handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit} change={handleChange}>
    <SearchInput prefix={MdSearch} buttonText="НАЙТИ" name="search" placeholder="Введите название компании или бренда" />
  </Form>
);

export default SearchLogo;

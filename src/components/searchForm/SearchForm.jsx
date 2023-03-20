import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <>
      <fieldset class="field-container">
        <input
          type="text"
          placeholder="Buscar productos, marcas y más..."
          class="field"
        />
      </fieldset>
    </>
  );
};

export default SearchForm;

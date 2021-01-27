import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategory }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInput = (e) => {
    setinputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setcategory((cat) => [inputValue, ...cat]);
      setinputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Categoría'
        onChange={handleInput}
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setcategory: PropTypes.func.isRequired,
};

AddCategory.defaultProps = {};

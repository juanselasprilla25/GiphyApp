import React from "react";
import PropTypes from "prop-types";

export const GiphyGridItem = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__bounceInLeft'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GiphyGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

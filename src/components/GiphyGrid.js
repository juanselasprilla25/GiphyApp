import React from "react";

/**
 * Components
 */
import { GiphyGridItem } from "./GiphyGridItem";

/**
 * Custom Hooks
 */
import { UseFetchGifs } from "../hooks/useFetchGifs";

export const GiphyGrid = ({ category }) => {
  const { data: Images, loading } = UseFetchGifs(category);
  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      {loading && (
        <p className='animate__animated animate__flash'>Loading Data...</p>
      )}
      <div className='cardGrid'>
        {/* <ol> */}
        {Images.map((image) => {
          return <GiphyGridItem key={image.id} {...image} />;
        })}
        {/* </ol> */}
      </div>
    </>
  );
};

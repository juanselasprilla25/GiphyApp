import React, { useState } from "react";

/**
 * Components
 */
import { AddCategory } from "./AddCategory";
import { GiphyGrid } from "./GiphyGrid";

export const GiphyApp = () => {
  const [category, setcategory] = useState(["One Punch"]);
  return (
    <>
      <h2>GiphyApp</h2>
      <hr />
      <AddCategory setcategory={setcategory} />
      {/* <ol> */}
      {category.map((categoryItem) => {
        return <GiphyGrid key={categoryItem} category={categoryItem} />;
      })}
      {/* </ol> */}
    </>
  );
};

import { useEffect, useState } from "react";

/**
 * Helpers
 */
import { getGifs } from "../helpers/getGifs";

export const UseFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((img) => {
      setState({
        data: img,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

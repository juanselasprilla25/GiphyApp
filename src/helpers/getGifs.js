export const getGifs = async (category) => {
  try {
    const ApiKey = "2ES5pAo98fC0I8jw5KJI2HJzvMt2q5eQ";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&limit=10&q=${encodeURI(
      category
    )}`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  } catch (error) {
    return error;
  }
};

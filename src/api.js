export const hot = async () => {
  return await fetch('data/hot.json')
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

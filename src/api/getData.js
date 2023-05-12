export const getData = (url, options) => {

  const result = fetch(url, options)
    .then((result) => result.json())
    .then((result) => result);
  return result;
};

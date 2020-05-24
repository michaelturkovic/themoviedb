export const getRandomItem = (
  totalPages: number,
  itemsOnPage: number
): { randomPage: number; randomItem: number } => {
  let randomPage = Math.floor(Math.random() * totalPages);
  let randomItem = Math.floor(Math.random() * itemsOnPage);
  return {
    randomPage,
    randomItem,
  };
};

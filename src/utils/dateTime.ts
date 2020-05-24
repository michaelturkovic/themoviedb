export const getYear = (date: string) => {
    let newDate = new Date(date);
    return newDate.getFullYear();
  };
  
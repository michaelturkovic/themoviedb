export const getYear = (date: string): string => {
  let year = '';
  if (date !== '') {
    let newDate = new Date(date);
    year = newDate.getFullYear().toString();
  }
  return year;
};

export const convertTime = (time: number): string => {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  let convertedTime = `${hours} hours ${minutes} minutes`;
  return convertedTime;
};

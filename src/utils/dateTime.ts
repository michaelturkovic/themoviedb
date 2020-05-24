export const getYear = (date: string): number => {
    let newDate = new Date(date);
    return newDate.getFullYear();
  };

  export const convertTime = (time: number): string => {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    let convertedTime = `${hours} hours ${minutes} minutes`;
    return convertedTime;
  };
  
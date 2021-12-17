export const fixDateFormat = (createdAt: string): string => {
  const parsedTimestamp = Date.parse(createdAt);
  const newDate = new Date(parsedTimestamp);
  const newMonth = newDate.getMonth() + 1 < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1;
  const newDay = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  const fixedDate = `${newDate.getFullYear()}/${newMonth}/${newDay}`;

  return fixedDate;
};

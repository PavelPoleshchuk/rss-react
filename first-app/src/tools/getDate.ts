export const getFormattedDate = (date: string) => {
  const d = new Date(Date.parse(date));
  return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${d.getFullYear()}`;
};

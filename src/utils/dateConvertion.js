export const dateConvertion = (data) => {
  const date = new Date(data);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = date.toLocaleDateString("id-ID", options);
  return formattedDate;
};
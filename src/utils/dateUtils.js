export const getMonthAndYear = (date) => {
  const year = date.split("-")[0];
  const month = Months[date.split("-")[1] - 1];

  return `${month} ${year}`;
};

const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

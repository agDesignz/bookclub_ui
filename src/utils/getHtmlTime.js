const getHtmlTime = (timetzString) => {
  // Split the string to separate the time and the time zone offset
  const [timePart, timeZoneOffset] = timetzString.split("-");

  // Further split the time part to get hours and minutes
  const [hours, minutes, seconds] = timePart.split(":");

  // Return the formatted time in HH:mm format
  return `${hours}:${minutes}`;
};

export default getHtmlTime;

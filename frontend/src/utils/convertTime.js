const convertTime = (time) => {
  // timeParts will return an array
  const timeParts = time.split(":");
  let hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  let meridian = "am";
  if (hours >= 12) {
    meridian = "pm";

    if (hours > 12) {
      hours -= 12;
    }
  }

  return (
    hours.toString().padStart +
    ":" +
    minutes.toString().padStart(2, "0") +
    "" +
    meridian
  );
};

export default convertTime;

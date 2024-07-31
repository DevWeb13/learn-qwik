// src/utils/formatDate.ts

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const day = date.getDate();

  // Adding suffixes to the day
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th");

  // Replacing the numeric day with the day with suffix
  return formattedDate.replace(/\d+/, dayWithSuffix);
}

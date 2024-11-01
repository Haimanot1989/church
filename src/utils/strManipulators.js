// Function to capitalize the title according to specific rules
function capitalizeTitle(title) {
  let cap = title
    .split(" ")
    .map(str => {
      let capitalizedFirstLetter = [
        "an",
        "yet",
        "into",
        "why",
        "is",
        "of",
        "the",
        "for",
        "from",
        "the",
        "in",
        "and",
        "at",
        "on",
        "a",
        "as",
        "or",
        "with",
        "that",
        "to",
        "us",
        "who",
        "far",
        "go",
        "you",
        "see",
        "up",
        "are",
        "saw",
        "has"
      ].includes(str.toLowerCase())
        ? str.charAt(0).toLowerCase()
        : str.charAt(0).toUpperCase();
      return `${capitalizedFirstLetter}${str.slice(1).toLowerCase()}`;
    })
    .join(" ");

  return `${cap.charAt(0).toUpperCase()}${cap.slice(1)}`;
}

// Function to convert the title to a file name
function convertTitleToFileName(title) {
  return title
    .trim()
    .replace(/[^0-9a-z ]/gi, "")
    .toUpperCase()
    .split(" ")
    .join("_");
}

// Export the functions
module.exports = { capitalizeTitle, convertTitleToFileName };

// mv ~/Downloads/***.pdf ~/workspace/private/church/public/sermons/.
// mv ~/Downloads/THE_FIRSTBORNS_OF_THE_FIRSTBORN.pdf ~/workspace/private/church/public/sermons/
//node src/utils/strManipulators.js

function capitalizeTitle(title) {
  let cap = title
    .split(" ")
    .map(str => {
      let capitalizedFirstLetter = [
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
        "we",
        "on",
        "a",
        "or",
        "with",
        "that",
        "to",
        "us",
        "who"
      ].includes(str.toLowerCase())
        ? str.charAt(0).toLowerCase()
        : str.charAt(0).toUpperCase();
      return `${capitalizedFirstLetter}${str.slice(1).toLowerCase()}`;
    })
    .join(" ");

  return `${cap.charAt(0).toUpperCase()}${cap.slice(1)}`;
}

function convertTitleToFileName(title) {
  return title
    .trim()
    .replace(/[^0-9a-z ]/gi, "")
    .toUpperCase()
    .split(" ")
    .join("_");
}

let titles = [
  "I SAW THEE UNDER THE FIG TREE",
  "GOD COMMANDS THE POOR TO GIVE",
  "THE GOD WHO KEEPS US EVERYDAY"
];
titles.forEach(title => {
  console.log(
    `\ncapitalizeTitle: ${capitalizeTitle(
      title
    )}\n convertTitleToFileName: ${convertTitleToFileName(title)}`
  );
});

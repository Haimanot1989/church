function capitalizeTitle(title) {
  return title
    .split(" ")
    .map(s => _.capitalize(s))
    .join(" ");
}

function convertTitleToFileName(title) {
  return title
    .toUpperCase()
    .split(" ")
    .join("_");
}

let title = "";
console.log(
  `capitalizeTitle: ${capitalizeTitle(
    title
  )}\n convertTitleToFileName: ${convertTitleToFileName(title)}`
);

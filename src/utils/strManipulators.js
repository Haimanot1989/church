function capitalizeTitle(title) {
  return title
    .split(" ")
    .map(str => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`)
    .join(" ");
}

function convertTitleToFileName(title) {
  return title
    .toUpperCase()
    .split(" ")
    .join("_");
}

let titles = [
  "MANY GIFTS, ONE CHURCH",
  "MODESTY IN DRESS",
  "THE LAST GREAT CATCH OF FISH",
  "THE MEDIATION OF CHRIST"
];
titles.forEach(title => {
  console.log(
    `\ncapitalizeTitle: ${capitalizeTitle(
      title
    )}\n convertTitleToFileName: ${convertTitleToFileName(title)}`
  );
});

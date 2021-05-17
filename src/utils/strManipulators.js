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

let title = "BEWARE THE CURIOSITY OF THE KING OF BABYLON";
console.log(
  `capitalizeTitle: ${capitalizeTitle(
    title
  )}\n convertTitleToFileName: ${convertTitleToFileName(title)}`
);

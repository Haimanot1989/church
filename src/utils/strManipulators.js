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
        "at"
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
  "SERVING GOD, SAVING THE KING ",
  "ENCOURAGING MANOAH",
  "THE PLAGUE STOPPED AT CALVARY",
  "GOD’S WORD – OUR DAILY BREAD FROM HEAVEN",
  "SIX REASONS WHY THE MYSTERY OF GODLINESS IS GREAT"
];
titles.forEach(title => {
  console.log(
    `\ncapitalizeTitle: ${capitalizeTitle(
      title
    )}\n convertTitleToFileName: ${convertTitleToFileName(title)}`
  );
});

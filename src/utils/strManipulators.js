function capitalizeTitle(title) {
  title
    .split(" ")
    .map(s => _.capitalize(s))
    .join(" ");
}

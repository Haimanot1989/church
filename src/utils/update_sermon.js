const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const {
  capitalizeTitle,
  convertTitleToFileName
} = require("./strManipulators");

// Path to the sermons.json file
const filePath = path.join(__dirname, "../components/data/sermons.json");

// Load the JSON file
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

// Array of new sermon objects
const newSermons = [
  {
    rawTitle: "JESUS: THE MEANING OF LIFE",
    summary: `This sermon explores the search for the meaning of life and how it ultimately leads to Jesus Christ. It begins with the idea that, throughout our lives, we look for meaning in people and relationships, such as with parents or friends. However, these sources, though significant, fall short and fail to provide lasting fulfillment. This continual search points to a deeper need for purpose beyond human connections.

The sermon asserts that true life originates from God. In Acts 17:28, Paul states, "In him we live, and move, and have our being," emphasizing that all life exists within God, even if many remain unaware of this truth. Humanity’s existence in God is made possible by the breath of life He gives. Yet, due to sin, humans lost their connection to the true meaning of life, leading to a sense of separation from God and spiritual emptiness.

Jesus Christ came to bridge this gap. Through His birth, life, death, and resurrection, Jesus restored humanity’s access to the meaning of life. He declared, “I am the way, the truth, and the life” (John 14:6), indicating that only through Him can one reconnect with God. To partake in this restored life, individuals must accept Jesus, symbolically eating His flesh and drinking His blood, representing a deep, transformative union with Him.

In conclusion, discovering the meaning of life involves two revelations: understanding that we live within God and recognizing that true life is found in Jesus Christ. By believing in Jesus, being baptized in His name, and receiving the Holy Spirit, one can fully experience life’s purpose. This sermon invites believers to embrace this truth not just intellectually but through a personal, spiritual encounter with Jesus.
    `,
    imgRef: "https://unsplash.com/photos/another-new-image-link",
    pages: 2
  }
];

// Function to add new sermons to the beginning of the sermons array
newSermons.forEach(sermon => {
  const formattedTitle = capitalizeTitle(sermon.rawTitle);
  const fileName = convertTitleToFileName(sermon.rawTitle);
  const formattedSummary = sermon.summary.replace(/\n/g, "\\n");

  const newSermon = {
    title: formattedTitle,
    summary: formattedSummary,
    pdfLink: `/sermons/${fileName}.pdf`,
    image: `/sermons/${fileName}.png`,
    imgRef: sermon.imgRef,
    pages: sermon.pages
  };

  data.sermons.unshift(newSermon);
});

// Save the updated JSON file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

// Move files from tmp_sermons to sermons folder
const tmpDir = path.join(process.env.HOME, "Downloads/tmp_sermons");
const sermonsDir = path.join(__dirname, "../../public/sermons");

if (!fs.existsSync(sermonsDir)) {
  fs.mkdirSync(sermonsDir, { recursive: true });
}

fs.readdirSync(tmpDir).forEach(file => {
  const oldPath = path.join(tmpDir, file);
  const newPath = path.join(sermonsDir, file);
  fs.renameSync(oldPath, newPath);
});

// Run Prettier on the updated JSON file
exec(`npx prettier --write ${filePath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running Prettier: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Prettier stderr: ${stderr}`);
    return;
  }
  console.log(`Prettier stdout: ${stdout}`);
  console.log("sermons.json has been updated and formatted successfully.");
});

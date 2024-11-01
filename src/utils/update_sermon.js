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
    rawTitle: "Found by Him: The Unseen Seekers of Christ",
    summary: `This sermon explores the theme of God’s initiative in reaching individuals, often those who aren't actively seeking Him. Isaiah 65:1 and Romans 10:20 highlight the mystery of divine grace, where God reveals Himself even to those who aren't looking for Him. Through four biblical narratives, the sermon emphasizes how God’s compassion and sovereignty extend to the most unexpected people.

First, the story of Saul, son of Kish (1 Samuel 9) illustrates how God uses ordinary events for divine purposes. Saul’s search for his father’s lost donkeys leads him to be anointed as Israel’s first king, showing that God can redirect mundane pursuits into encounters with destiny.

Second, in Luke 7, Jesus encounters a funeral procession in Nain, where He raises a widow’s only son from the dead. This act of compassion occurs without the widow seeking Him, demonstrating prevenient grace—God’s mercy and intervention before humans even recognize their need.

The third story, Zacchaeus the tax collector (Luke 19), shows a man seeking Jesus out of curiosity rather than faith. Jesus calls Zacchaeus down from a sycamore tree, enters his home, and offers salvation, symbolizing divine hospitality and acceptance. This story underscores that even our smallest steps toward God can lead to profound transformation.

Lastly, Saul of Tarsus (Acts 9) actively persecutes Christians, yet encounters Jesus on the road to Damascus. This dramatic conversion highlights God’s irresistible grace, capable of transforming even the most resistant heart. Saul’s transformation into Paul, a devoted apostle, reflects the boundless reach of God’s mission.

In these stories, we see a unifying theme of God’s grace reaching the unexpected. Hebrews 11:6 encourages those who diligently seek Him, assuring that they will encounter His rewards. The sermon concludes by urging believers to seek God wholeheartedly, trusting in His unfailing presence and promises.`,
    imgRef: "https://unsplash.com/photos/another-new-image-link",
    pages: 3
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

  const tmpDir = path.join(process.env.HOME, "Downloads/tmp_sermons");
  const sermonsDir = path.join(__dirname, "../../public/sermons");

  if (!fs.existsSync(sermonsDir)) {
    fs.mkdirSync(sermonsDir, { recursive: true });
  }

  // Read files from tmp_sermons directory
  const files = fs.readdirSync(tmpDir);

  files.forEach(file => {
    const oldPath = path.join(tmpDir, file);
    let newPath;

    if (file.endsWith(".pdf")) {
      newPath = path.join(sermonsDir, `${fileName}.pdf`);
    } else {
      newPath = path.join(sermonsDir, `${fileName}.png`);
    }

    fs.renameSync(oldPath, newPath);
  });
});

// Save the updated JSON file
fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");

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

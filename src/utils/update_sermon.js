const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const {
  capitalizeTitle,
  convertTitleToFileName
} = require("./strManipulators");

// Path to the sermons.json file
const filePath = path.join(__dirname, "../components/data/sermons.json");
const podFilePath = path.join(__dirname, "../components/data/podcasts.json");

// Load the JSON file
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
const podData = JSON.parse(fs.readFileSync(podFilePath, "utf8"));

// Array of new sermon objects
const newSermons = [
  {
    rawTitle: "The Learned Secret: Contentment as Holy Defiance",
    summary: `In Philippians 4:11, Paul declares, “I have learned, in whatsoever state I am, therewith to be content.” Contentment is not something we inherit or achieve through comfortable circumstances; it is a spiritual discipline learned through trusting God. Humanity naturally grasps for more—approval, security, recognition, and possessions—but abundance cannot satisfy a heart consumed by envy and comparison. As Ecclesiastes 5:10 teaches, loving silver never brings lasting satisfaction.
Paul learned contentment in both abundance and need, hunger and fullness, imprisonment and plenty. The secret is not a formula for controlling circumstances but a Person: Jesus Christ, who strengthens us (Philippians 4:12–13). True contentment comes from His presence, not from possessing everything we desire. As Psalm 23:1 declares, “The LORD is my shepherd; I shall not want.” Our sufficiency rests in our relationship with God, not in our material resources.
Covetousness challenges God’s wisdom, treating another person’s blessings as evidence of our own lack. Scripture calls it idolatry (Colossians 3:5) and warns that envy produces confusion and evil (James 3:16). Contentment instead cultivates gratitude, trust, and peace. From Adam and Eve’s disobedience to Israel’s wilderness complaints, Scripture reveals the danger of believing God is withholding something good. Jesus reminds us that life is more than possessions and calls us to trust the Father’s provision (Matthew 6:25; Luke 12:15).
Contentment does not mean abandoning ambition or becoming passive. It means serving God faithfully where He has placed us without envying another’s calling. Godliness with contentment is great gain (1 Timothy 6:6–8), because God promises never to leave nor forsake us (Hebrews 13:5).
Ultimately, contentment is holy defiance against comparison, worry, and covetousness. It is receiving life as a gift and declaring God our portion. Through daily trust, we learn to unclench our hands, treasure Christ above lesser desires, and worship faithfully in every season.
`,
    imgRef:
      "https://unsplash.com/photos/man-raising-arms-in-a-vibrant-sunflower-field-A20Epqrw-A0",
    pages: 3,
    recordedDate: "2026-10-24"
  }
];

// Function to add new sermons to the beginning of the sermons array
newSermons.forEach(sermon => {
  const formattedTitle = capitalizeTitle(sermon.rawTitle);
  const fileName = convertTitleToFileName(sermon.rawTitle);
  const formattedSummary = sermon.summary.replace(/\n/g, "\n");

  const newSermon = {
    title: formattedTitle,
    summary: formattedSummary,
    pdfLink: `/sermons/${fileName}.pdf`,
    image: `/sermons/${fileName}.png`,
    imgRef: sermon.imgRef,
    pages: sermon.pages,
    recordedDate: sermon.recordedDate
  };

  const newPodEpisodeMetaData = {
    episodeUrl: "https://player.rss.com/onlyjesus/3106336?theme=dark",
    sermonUrl: `/sermons/${fileName}.pdf`,
    title: `#170: ${formattedTitle}`
  };

  data.sermons.unshift(newSermon);
  podData.episodes.push(newPodEpisodeMetaData);

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
fs.writeFileSync(podFilePath, JSON.stringify(podData, null, 2), "utf8");

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

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
    rawTitle: "The Hand That Writes in Heaven",
    summary: `This sermon centers on the sobering reality that God sees, remembers, and records every human life. Scripture repeatedly speaks of heavenly books: a book of remembrance, a book of life, and records by which humanity will ultimately be judged. Nothing—deeds, words, motives, or hidden sins—is concealed from God.
Daniel 5 illustrates this through King Belshazzar. During a feast, Belshazzar profaned the sacred vessels taken from Jerusalem and praised idols rather than the God who held his very breath. Suddenly, a mysterious hand appeared and wrote upon the palace wall. The sermon emphasizes that the hand was not beginning to record Belshazzar’s life that night; rather, the visible writing revealed a judgment that heaven had already been recording for years. God had patiently given Belshazzar life, prosperity, and opportunities to humble himself, yet he continued in pride.
This becomes a warning for everyone: God’s silence should never be mistaken for His absence. Every secret thing remains visible before Him, and one day the heavenly books will be opened. Belshazzar’s tragedy was especially serious because he already knew how God had humbled his grandfather Nebuchadnezzar, yet refused to learn from it. 
Yet the sermon’s message is not merely judgment—it is also redemption. The hand that writes is also the hand that saves. The sermon connects the divine hand that wrote Belshazzar’s judgment with Christ’s hands nailed to the cross. Jesus bore the record of sin and offers forgiveness to those who repent.
The sermon therefore ends with an urgent question: What is being written in heaven concerning your life? The writing continues, but while there is still time, God calls people to turn to Him and receive mercy and abundant pardon.
`,
    imgRef: "https://chatgpt.com/s/m_6ab83c71c6948191ba84764514c7c408",
    pages: 6,
    recordedDate: "2026-09-19"
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
    title: `#165: ${formattedTitle}`
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

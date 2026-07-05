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
    rawTitle: "The Stranger Who Saved the Savior",
    summary: `This sermon centers on the surprising story of Zipporah in Exodus 4:24–26, arguing that God often chooses the most unexpected people to accomplish His greatest acts of salvation. When God sought to kill Moses because he had neglected the covenant of circumcision, it was Zipporah—a Midianite, a foreigner, and an outsider to Israel's covenant line—who acted decisively. By circumcising her son with a sharp flint stone and shedding covenant blood, she restored Moses' standing before God and preserved the life of the very man chosen to deliver Israel.
The sermon presents this event as a foreshadowing of Jesus Christ. Just as the sharp stone removed the barrier preventing Moses from fulfilling his calling, Christ's death accomplishes the "circumcision made without hands," removing humanity's sinful nature through His sacrifice. Zipporah's bloody act points forward to Christ, the Bridegroom who purchases His people through His own blood rather than the blood of another.
A major theme is God's consistent pattern of using outsiders. The sermon highlights the Good Samaritan, Rahab, the Samaritan woman, and ultimately Jesus Himself—rejected by His own people—to demonstrate that God repeatedly brings salvation through those whom society overlooks or despises. This overturns human prejudice and reveals that God's wisdom often contradicts human expectations.
The sermon concludes by challenging believers to reconsider whom they regard as outsiders or enemies. Just as Zipporah unexpectedly became the instrument that saved Moses, God may use unlikely people to accomplish His purposes today. Ultimately, every unexpected deliverer in Scripture points to Jesus Christ, whose rejection, sacrifice, and shed blood secured salvation for all who believe.
`,
    imgRef: "https://x.com/mihael_stein/photo",
    pages: 5,
    recordedDate: "2026-07-04"
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

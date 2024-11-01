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
    rawTitle: "Lift Up Your Heads",
    summary: `This sermon, titled "Lift Up Your Heads," calls on believers to stay vigilant and faithful as signs of Jesus' return become increasingly evident. Luke 21:28 encourages Christians to “look up” and be aware of the prophecies signaling redemption. The sermon begins by reflecting on the first coming of Jesus, highlighting how prophecies, like Micah's foretelling of Jesus' birth in Bethlehem, were ignored by many Israelites. Despite clear signs, it was the humble wise men—non-Jews—who followed a star to find Jesus, underscoring that God can use anyone, even non-believers, to fulfill His plans when His people are unresponsive.

The sermon then draws a parallel between the Israelites’ neglect of prophetic signs and today’s society, warning that many are similarly inattentive to prophecies about Christ’s second coming. Today’s advancements in technology are cited as a potential fulfillment of Daniel’s prophecy about knowledge increasing in the end times (Daniel 12:4). While technology itself is neutral, it can be used for evil, especially in worship of the Antichrist, as suggested in Revelation’s prophecy of a mark required for commerce (Revelation 13:16-17). The sermon urges believers to use technology to glorify God rather than being consumed by worldly distractions.

Further signs include the restoration of Israel, the anticipated Battle of Gog and Magog, the potential rebuilding of the Third Temple, and the rise in demonic interest and UFO phenomena. Rather than seeking new signs, believers are encouraged to have faith in the prophets and apostles, who have already given sufficient warning. The message concludes with a call to “lift up your heads” and stay spiritually alert, embracing the coming redemption with faith and preparation.`,
    imgRef:
      "https://unsplash.com/photos/clear-glass-hour-glass-on-black-table--NOt0m6zXJU",
    pages: 2
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

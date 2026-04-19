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
    rawTitle: "Run, Cushi, Run and Tell The Whole Truth",
    summary: `This sermon draws from 2 Samuel 18 and contrasts two messengers—Ahimaaz and Cushi—to illustrate the difference between partial truth and faithful proclamation. After Absalom’s death, both men run to inform King David. Ahimaaz, though fast and eager, delivers an incomplete message, avoiding the painful truth. Cushi, though slower and less prominent, faithfully communicates the full reality.
This contrast becomes a powerful metaphor for modern preaching. Ahimaaz represents those who prioritize speed, popularity, and acceptance over truth. They proclaim comforting messages like “all is well” but fail to address essential spiritual realities. The sermon identifies two such groups: Trinitarian preachers who complicate the identity of God rather than clearly declaring Jesus as God manifested in the flesh, and prosperity preachers who emphasize comfort, success, and blessing while neglecting suffering, sacrifice, and repentance. Both avoid the difficult but necessary parts of the gospel.
In contrast, Cushi represents the faithful preacher of the One God who stands on the rock of scripture and declares that the LORD our God is one LORD. (Deuteronomy 6:4, KJV) He declares that Jesus Christ is that One LORD manifested in flesh. For in him dwelleth all the fulness of the Godhead bodily. (Colossians 2:9, KJV) He does not need three persons to explain the mystery. He simply preaches what the scripture says: God was in Christ, reconciling the world unto himself. (2 Corinthians 5:19, KJV) The faithful Cushi preacher also preaches the whole counsel of God concerning the new birth. He does not skip Acts 2:38. He proclaims it boldly: Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. He tells people that baptism is not a symbol but an answer of a good conscience toward God, by the resurrection of Jesus Christ. (1 Peter 3:21, KJV) He tells them 4 that except a man be born of water and of the Spirit, he cannot enter into the kingdom of God. (John 3:5, KJV) He tells them that the promise of the Holy Ghost is for them and for their children and for all that are afar off, even as many as the Lord our God shall call. (Acts 2:39, KJV). 
The sermon also highlights historical and contemporary examples of “Cushi-like” ministers—often humble, overlooked individuals—who faithfully spread the full gospel without seeking recognition. The message calls believers to value faithfulness over fame. God is not concerned with who arrives first or gains the largest audience, but with who tells the truth. The challenge is clear: choose to be like Cushi—obedient, truthful, and committed to carrying the full message of the gospel.
`,
    imgRef:
      "httpshttps://unsplash.com/photos/a-runner-is-captured-in-motion-with-a-blurred-background-TVTwrKyM0ik",
    pages: 6,
    recordedDate: "2026-04-18"
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

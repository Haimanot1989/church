# How to Update the Church Website with a New Sermon

## Steps to Update the Website with a New Sermon

### 1. Receive the Sermon Content

- Get the sermon PDF and audio file from the pastor.
- Download the PDF and audio file.

### 2. Summarize the Sermon

- Copy the content from the PDF.
- Use a tool like ChatGPT to summarize the content into a concise summary.
- Manually review and correct the summary to ensure doctrinal accuracy.

### 3. Prepare the Sermon Data

- Open `update_sermon.js` in VS Code.
- Add a new sermon object to the `newSermons` array with the following fields:
  - `rawTitle`: The raw title of the sermon.
  - `summary`: The corrected summary.
  - `imgRef`: The reference link to the image source.
  - `pages`: The number of pages in the PDF.

### 4. Edit the Image

- Download the image from Unsplash.
- Edit the image to make it square and add the title of the sermon.
- Save the edited image in the `~/Downloads/tmp_sermons` folder with the file name suffixed with "large".
- Resize the image to 600x600 and save it in the same folder with the sermon file name.

### 5. Run the Automation Script

- Ensure the `~/Downloads/tmp_sermons` folder contains exactly one image and one PDF file.
- Run the `update_sermon.js` script using Node.js:
  ```sh
  node src/utils/update_sermon.js
  ```

### 6. Script Execution

- The script will:
  - Load the `sermons.json` file.
  - Iterate over the `newSermons` array.
  - Format the title and generate the file name.
  - Add each new sermon object to the beginning of the `sermons` array.
  - Move and rename the image and PDF files from the `~/Downloads/tmp_sermons` folder to the `public/sermons` folder.
  - Save the updated `sermons.json` file.
  - Run Prettier to format the JSON file.

### 7. Verify the Update

- Check the `public/sermons` folder to ensure the files have been moved and renamed correctly.
- Verify the `sermons.json` file to ensure the new sermon object has been added correctly.
- Check the website to ensure the new sermon is displayed correctly.

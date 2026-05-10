const fs = require('fs');
const path = require('path');

const SRC_DATA_DIR = path.join(__dirname, '../src/components/data');
const DEST_CONTENT_DIR = path.join(__dirname, '../src/content');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractSlugFromPdfLink(pdfLink) {
  if (!pdfLink) return '';
  const match = pdfLink.match(/\/sermons\/([^.]+)/);
  return match ? match[1] : '';
}

function padNumber(num, length = 3) {
  return String(num).padStart(length, '0');
}

function migrateSermons() {
  console.log('\n📖 Migrating sermons...');
  const sermonsPath = path.join(SRC_DATA_DIR, 'sermons.json');
  const data = JSON.parse(fs.readFileSync(sermonsPath, 'utf-8'));
  const sermons = data.sermons || [];
  const totalSermons = sermons.length;
  
  let created = 0;
  let errors = [];

  sermons.forEach((sermon, index) => {
    const order = totalSermons - index;
    const slug = extractSlugFromPdfLink(sermon.pdfLink);
    
    if (!slug) {
      errors.push(`Sermon at index ${index} has no valid pdfLink`);
      return;
    }

    const fileData = {
      order,
      slug,
      ...sermon,
      date: sermon.recordedDate || null
    };
    
    delete fileData.recordedDate;

    const fileName = `sermon-${padNumber(order)}.json`;
    const filePath = path.join(DEST_CONTENT_DIR, 'sermons', fileName);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      created++;
    } catch (error) {
      errors.push(`Failed to write ${fileName}: ${error.message}`);
    }
  });

  console.log(`  ✓ Created ${created} sermon files`);
  if (errors.length > 0) {
    console.log(`  ✗ ${errors.length} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
}

function migrateAnnouncements() {
  console.log('\n📢 Migrating announcements...');
  const announcementsPath = path.join(SRC_DATA_DIR, 'announcement.json');
  const data = JSON.parse(fs.readFileSync(announcementsPath, 'utf-8'));
  const announcements = data.announcements || [];
  const totalAnnouncements = announcements.length;
  
  let created = 0;
  let errors = [];

  announcements.forEach((announcement, index) => {
    const order = totalAnnouncements - index;
    const slug = slugify(announcement.title);
    
    const fileData = {
      order,
      slug,
      date: null,
      ...announcement
    };

    const fileName = `announcement-${padNumber(order)}.json`;
    const filePath = path.join(DEST_CONTENT_DIR, 'announcements', fileName);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      created++;
    } catch (error) {
      errors.push(`Failed to write ${fileName}: ${error.message}`);
    }
  });

  console.log(`  ✓ Created ${created} announcement files`);
  if (errors.length > 0) {
    console.log(`  ✗ ${errors.length} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
}

function migrateBooks() {
  console.log('\n📚 Migrating books...');
  const booksPath = path.join(SRC_DATA_DIR, 'books.json');
  const data = JSON.parse(fs.readFileSync(booksPath, 'utf-8'));
  const books = data.books || [];
  const totalBooks = books.length;
  
  let created = 0;
  let errors = [];

  books.forEach((book, index) => {
    const order = totalBooks - index;
    const slug = slugify(book.title);
    
    const fileData = {
      order,
      slug,
      date: null,
      ...book
    };

    const fileName = `book-${padNumber(order)}.json`;
    const filePath = path.join(DEST_CONTENT_DIR, 'books', fileName);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      created++;
    } catch (error) {
      errors.push(`Failed to write ${fileName}: ${error.message}`);
    }
  });

  console.log(`  ✓ Created ${created} book files`);
  if (errors.length > 0) {
    console.log(`  ✗ ${errors.length} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
}

function migratePodcasts() {
  console.log('\n🎙️  Migrating podcasts...');
  const podcastsPath = path.join(SRC_DATA_DIR, 'podcasts.json');
  const data = JSON.parse(fs.readFileSync(podcastsPath, 'utf-8'));
  const episodes = data.episodes || [];
  const totalEpisodes = episodes.length;
  
  let created = 0;
  let errors = [];

  episodes.forEach((episode, index) => {
    const order = totalEpisodes - index;
    const slug = slugify(episode.title);
    
    const fileData = {
      order,
      slug,
      date: null,
      ...episode
    };

    const fileName = `podcast-${padNumber(order)}.json`;
    const filePath = path.join(DEST_CONTENT_DIR, 'podcasts', fileName);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      created++;
    } catch (error) {
      errors.push(`Failed to write ${fileName}: ${error.message}`);
    }
  });

  console.log(`  ✓ Created ${created} podcast files`);
  if (errors.length > 0) {
    console.log(`  ✗ ${errors.length} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
}

function migrateConferences() {
  console.log('\n🏛️  Migrating conferences...');
  const conferencesPath = path.join(SRC_DATA_DIR, 'conferences.json');
  const data = JSON.parse(fs.readFileSync(conferencesPath, 'utf-8'));
  
  let created = 0;
  let errors = [];
  let order = 1;

  Object.entries(data).forEach(([key, conference]) => {
    const slug = slugify(key);
    
    const fileData = {
      key,
      slug,
      order: order++,
      date: null,
      ...conference
    };

    const fileName = `${slug}.json`;
    const filePath = path.join(DEST_CONTENT_DIR, 'conferences', fileName);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      created++;
    } catch (error) {
      errors.push(`Failed to write ${fileName}: ${error.message}`);
    }
  });

  console.log(`  ✓ Created ${created} conference files`);
  if (errors.length > 0) {
    console.log(`  ✗ ${errors.length} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
}

function migrateOnlineMeetings() {
  console.log('\n💻 Migrating online meetings...');
  const meetingsPath = path.join(SRC_DATA_DIR, 'onlineMeetings.json');
  const data = JSON.parse(fs.readFileSync(meetingsPath, 'utf-8'));
  
  let created = 0;
  let errors = [];
  let order = 1;

  Object.entries(data).forEach(([key, meeting]) => {
    const slug = slugify(key);
    
    const fileData = {
      key,
      slug,
      order: order++,
      date: null,
      ...meeting
    };

    const fileName = `${slug}.json`;
    const filePath = path.join(DEST_CONTENT_DIR, 'online-meetings', fileName);
    
    try {
      fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));
      created++;
    } catch (error) {
      errors.push(`Failed to write ${fileName}: ${error.message}`);
    }
  });

  console.log(`  ✓ Created ${created} online meeting files`);
  if (errors.length > 0) {
    console.log(`  ✗ ${errors.length} errors:`);
    errors.forEach(err => console.log(`    - ${err}`));
  }
}

console.log('🚀 Starting content migration...');
console.log('=====================================');

try {
  migrateSermons();
  migrateAnnouncements();
  migrateBooks();
  migratePodcasts();
  migrateConferences();
  migrateOnlineMeetings();
  
  console.log('\n=====================================');
  console.log('✅ Migration completed successfully!');
  console.log('\nNext steps:');
  console.log('  1. Review generated files in src/content/');
  console.log('  2. Archive old JSON files in src/components/data/');
  console.log('  3. Continue with Astro component conversion');
} catch (error) {
  console.error('\n❌ Migration failed:', error.message);
  process.exit(1);
}

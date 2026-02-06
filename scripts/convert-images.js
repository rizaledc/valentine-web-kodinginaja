const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');

fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    if (path.extname(file).toLowerCase() === '.png') {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, path.parse(file).name + '.webp');

      sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted ${file} to WebP`);
          // Delete the original file
          fs.unlink(inputPath, (err) => {
            if (err) console.error(`Error deleting ${file}:`, err);
            else console.log(`Deleted ${file}`);
          });
        })
        .catch(err => {
          console.error(`Error converting ${file}:`, err);
        });
    }
  });
});

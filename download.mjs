import fs from 'fs';
import https from 'https';

const url = "https://drive.google.com/uc?export=download&id=1qb43lAVFUEXWpojJ6CgdYu3SE0BWhvic";

function download(url, dest) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      download(res.headers.location, dest);
    } else {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded to ' + dest);
      });
    }
  }).on('error', (err) => {
    console.error('Error downloading:', err.message);
  });
}

download(url, "public/nubo-logo.png");

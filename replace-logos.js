import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir);

const old1 = "https://drive.google.com/uc?id=1qb43lAVFUEXWpojJ6CgdYu3SE0BWhvic";
const old2 = "https://lh3.googleusercontent.com/aida/ADBb0ujTO8OICi5dMqeWK-37zXjL6hSeOTulMvdrsKKR7Lv7fW8urGGZFy4hjQBQCW-bmlF-CYsXf4_O0ItQhwdM0ywSYtBX5yEVQNUNfY7zklBeOOxLw8wupr-o3Lf0Tu0agaQ2x5MT0tuSqiWXrkyFx_1fTiP7FwYTZTQvEuhfXtzMzEUTd3gPkulOP1Uqig7ZqBm7WpZN61bKigv5Qlb8FelxgNmMRRBpoA_yOhpNjTokkypSLIClOBqbZJwyiUC0I94KaJ2gE92bjw";

for (const file of files) {
  if (file.endsWith('.tsx') || file.endsWith('.ts')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    if (content.includes(old1)) {
      content = content.split(old1).join('/nubo-logo.png');
      changed = true;
    }
    
    if (content.includes(old2)) {
      content = content.split(old2).join('/nubo-logo.png');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + file);
    }
  }
}

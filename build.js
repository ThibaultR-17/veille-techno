const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, 'data');
const structure = {};

fs.readdirSync(base).forEach(folder => {
  const folderPath = path.join(base, folder);
  if (fs.lstatSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.json'));
    structure[folder] = files;
  }
});

fs.writeFileSync(path.join(base, 'structure.json'), JSON.stringify(structure, null, 2));
console.log("✅ structure.json généré !");

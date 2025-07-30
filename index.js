const fs = require('fs');
const path = require('path');
const counts = require('download-counts');

const INPUT_FILE = path.resolve('./dependents.json');
const OUTPUT_FILE = path.resolve('./top-express-dependents.json');

const dependents = JSON.parse(fs.readFileSync(INPUT_FILE, 'utf8'));
const enriched = dependents.map(dep => {
  const name = dep.package_name || dep.name;
  const downloads = counts[name] || 0;
  return { name, downloads };
});

enriched.sort((a, b) => b.downloads - a.downloads);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(enriched.slice(0, 500), null, 2));
console.log(`✅ Done: wrote ${enriched.length} packages`);

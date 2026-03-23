const fs = require('fs');

let content = fs.readFileSync('src/data/siteContent.ts', 'utf8');
content = content.replace(
/export const reviews = \[[\s\S]*?\]/g,
`export const reviews = [
  {
    author: 'Diana',
    text: 'Kundig, netjes en betrouwbaar! Wij zijn zeer tevreden met Schildersbedrijf Buunk Hengelo gld.',
    stars: 5,
  },
  {
    author: 'Erick Walgemoed',
    text: 'Heel tevreden!',
    stars: 5,
  },
  {
    author: 'Max Gaertner',
    text: 'Super blij met mijn schilderwerk, ik kan iedereen Buunk aanraden!',
    stars: 5,
  },
]`
);
fs.writeFileSync('src/data/siteContent.ts', content);

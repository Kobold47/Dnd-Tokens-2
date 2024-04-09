#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const image_folder = [];
image_folder.push("./images_sfx/", "./images_icons/", "./images_mark/");
const ROOT_DIR = './images_';
const README_FILENAME = 'README.md';
const NB_IMAGES_PER_LINE = 6;
image_folder.forEach((element) => {
let nbImages = 0;
let mdContent = '[Основные Токены](https://github.com/Kobold47/Dnd-Tokens-2/blob/main/images_mark/README.md)';
mdContent += ` |
[Иконки](https://github.com/Kobold47/Dnd-Tokens-2/blob/main/images_icons/README.md)`;
mdContent += ` |
[Эффекты](https://github.com/Kobold47/Dnd-Tokens-2/blob/main/images_sfx/README.md)`;
mdContent += ` |
<table><tr>`;



fs.readdirSync(element).forEach((image) => {
  if (image !== README_FILENAME && image !== 'markdown.js') {
    if (!(nbImages % NB_IMAGES_PER_LINE)) {
      if (nbImages > 0) {
        mdContent += `
</tr>`;
      }
      mdContent += `
<tr>`;
    }
    nbImages++;
    mdContent += `
<td valign="bottom">
<img src="./${image}" width="100" height="100"><br>
${image}
</td>
`;
  }
});
mdContent += `
</tr></table>`;

fs.writeFileSync(path.join(element, README_FILENAME), mdContent);

});
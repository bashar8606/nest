const fs = require('fs');
const args = process.argv;
const folderName = `src/components/${args[2]}`;

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    fs.appendFile(`${folderName}/index.js`, `${`import Style from "./${args[2]}.module.scss";\n\nconst ${args[2]} = ({ props }) => {\n return (\n <>${args[2]} </>\n);\n };\nexport default ${args[2]};`}`, function (err) {
        if (err) throw err;
        console.log(`created ${args[2]} component`);
      });
      fs.appendFile(`${folderName}/${args[2]}.module.scss`, `${'@import "../../styles/util";'}`, function (err) {
        if (err) throw err;
      });
  }
} catch (err) {
  console.error(err);
}




import fs from 'node:fs/promises'
// import { join } from 'node:path'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
(async () => {
  const url = path.join(__dirname, './modules')
  console.log('url', url);
  const dir = await fs.readdir(url)
  console.log(dir);

  for (const fileName of dir) {
    const filePath = path.join(url, fileName)
    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' })
    // const { attrs } = await import(filePath)
    console.log(fileContent);
    const attrsRegex = /export\s+const\s+attrs\s*=\s*(\[[^;]*\]);/;
    const match = fileContent.match(attrsRegex);
    console.log(match);

    if (match) {
      const attrsArray = eval(match[1]); // Use eval to convert the matched string to an array
    
      // Generate the type definition
      const typeDefinition = `type TRow = {\n${attrsArray.map(attr => `  ${attr.name}: ${attr.dataType};`).join('\n')}\n};`;
    
      // Update the file content with the type definition
      const updatedFileContent = fileContent.replace(attrsRegex, `$&\n\n${typeDefinition}`);
    
      // Write the updated content back to the file
      await fs.writeFile(filePath, updatedFileContent, 'utf-8');
    
      console.log('Type definition added successfully.');
    } else {
      console.log('Attrs array not found in the file.');
    }
  }
})()
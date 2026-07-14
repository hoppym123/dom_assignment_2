const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'shopping.txt');
const items = 'Milk\nEggs\nBread';

async function manageShoppingList() {
  try {
    // 1. Create and write to shopping.txt
    console.log('Writing items to shopping.txt...');
    await fs.writeFile(filePath, items, 'utf-8');
    console.log('File written successfully!\n');

    // 2. Read the file back  
    console.log('Reading shopping.txt...');
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('--- File Contents ---');
    console.log(data);
    console.log('---------------------\n');

    // 3. Count the lines
    // Splitting by newline and filtering out any trailing empty lines
    const lines = data.split('\n').filter(line => line.trim() !== '');
    console.log(`Total line count: ${lines.length}`);

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

manageShoppingList();
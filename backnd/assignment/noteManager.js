const fs = require('fs/promises');
const path = require('path');

const notesPath = path.join(__dirname, 'notes.txt');

/**
 * Adds a new note to the end of the file.
 * @param {string} note 
 */
async function addNote(note) {
  try {
    // Append the note with a newline character
    await fs.appendFile(notesPath, note + '\n', 'utf-8');
    console.log(`✓ Added note: "${note}"`);
  } catch (error) {
    console.error('Failed to add note:', error.message);
  }
}

/**
 * Reads and prints all notes.
 */
async function readNotes() {
  try {
    const data = await fs.readFile(notesPath, 'utf-8');
    
    // Check if the file is empty or just contains whitespace
    if (!data.trim()) {
      console.log('📁 Your note manager is empty!');
      return;
    }

    console.log('\n--- Your Notes ---');
    console.log(data.trim());
    console.log('------------------');
  } catch (error) {
    // If the file doesn't exist yet, it means no notes have been added
    if (error.code === 'ENOENT') {
      console.log('📁 No notes found. Try adding one first!');
    } else {
      console.error('Failed to read notes:', error.message);
    }
  }
}

/**
 * Clears all saved notes.
 */
async function clearNotes() {
  try {
    // Overwrite the file with an empty string
    await fs.writeFile(notesPath, '', 'utf-8');
    console.log('🧹 All notes cleared successfully!');
  } catch (error) {
    console.error('Failed to clear notes:', error.message);
  }
}

// --- TEST RUN / DEMONSTRATION ---
async function runDemo() {
  console.log('--- Starting Note Manager Demo ---');
  
  // 1. Add some notes
  await addNote('Buy groceries');
  await addNote('Finish Node.js homework');
  await addNote('Call Mom at 5 PM');

  // 2. Read the notes back
  await readNotes();

  // 3. Clear the notes (uncomment the line below to test clearing)
  // await clearNotes();
  // await readNotes();
}

runDemo();
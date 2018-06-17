// console.log('Starting notes.js');

// console.log(module);
// module.exports.age = 31;
//
// module.exports.addNote = () => {
//   console.log('addNote');
//   return "New note";
// };
const fs = require('fs');

var fetchNotes = () => {
  try{ // if notes.json not already there then [] from above
    var noteString = fs.readFileSync("notes.json");
     //typeof noteString > string, key and value are "" covered
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  // console.log(`title: ${title},\nbody: ${body}\n\n`);
  var notes = fetchNotes();
  var note = {
      title,
      body
    };

  // every duplicate note will be true and added to duplicateNotes
  var duplicateNotes = notes.filter((note) => note.title === title); //ES6

  if(duplicateNotes.length === 0){
     notes.push(note);
     saveNotes(notes);
     return note;
  }
}

var getAll = () => {
  return fetchNotes();
}

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
}

var readNote = (title) => {
  return fetchNotes().filter((note) => note.title === title)[0];
}

var logNote  = (note) => {
  return `title: ${note.title}\nbody: ${note.body}\n`;
};

module.exports = {
  addNote, //ES6 for addNote : addNote
  getAll,
  removeNote,
  readNote,
  logNote
}

//first say npm init
//npm install lodash --save

//npm install for reinstall complete node_modules folder
//npm install nodemon -g (globally installed)
// console.log('Starting app.js');
const fs = require('fs');
const os = require('os');

const _ = require('lodash');
const yargs = require('yargs');

const notes = require("./notes.js");

// var user = os.userInfo();
//
// fs.appendFile("greetings.txt", `Hello ${user.username}. You are ${notes.age} years.`);
//
// var res = notes.addNote();
// console.log(res);

//bad because node app.js --title="..." -body= "hello" makes mistakes
// var command = process.argv[2];
// console.log(`Command: ${command}`);
var titleOpt = {
  descibe: 'Title of note',
  demand: true,
  alias: 't'
};

var bodyOpt = {
  describe: 'Body of note',
    demand: false, //by default
    alias: 'b'
};

const argv = yargs
  .command(//set options to yargs like require some or likewise
    'add','add a new note',{ //command user types, then english readable descr
        title:  titleOpt,
        body: bodyOpt
    }
  )
  .command('list','List all notes')
  .command('read','Read a note', {
    title: titleOpt
  })
  .command('remove','remove a single note',{
    title: titleOpt
  })
  .help() //sets yargs up to return usefull info in commandline
          //through node app.js --help
          // or node app.js add --help
  .argv;
// console.log(argv);
// console.log(process.argv);

var command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note) console.log(`Note added\n`+notes.logNote(note));
  else console.log(`Duplicate title detected.`);

}else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `Note was removed` : `Note not found`;
  console.log(message);

}else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).\n`);
  allNotes.forEach((note) => {
    console.log(notes.logNote(note))
  });

}else if (command === 'read') {
  var note = notes.readNote(argv.title);
  note ? console.log('Note found\n' + notes.logNote(note)) : console.log(`Note not found`);;

}else {
  console.log("Command not recognized");
}

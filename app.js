const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./Application/notes.js');
const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
    };
    
const argv = yargs.command("add", 'Add a new note', {
    title: titleOption,
    body: bodyOption
}).command('list', 'List all notes', {})
.command('read', 'Read a note', {title: titleOption})
.command("remove", 'Remove a note', {title: titleOption})
.help().argv;
var command = argv._[0];
if (command === 'add') {
    console.log('Adding new note');
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    console.log('Listing all notes');
    let notesArray = notes.getAll();
    if (notesArray.length > 0) {
        console.log(`Printing ${notesArray.length} note(s).`);
        notesArray.forEach(note => {
            notes.logNote(note)
        });
    }
    else {
        console.log("There are no notes available")
    }
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}
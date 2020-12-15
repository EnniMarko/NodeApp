const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./Application/notes.js');
const argv = yargs.argv;
var command = argv._[0];
console.log('Command:', command);
console.log('Yargs', argv);
if (command === 'add') {
    console.log('Adding new note');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    console.log('Listing all notes');
    notes.getAll();
} else if (command === 'read') {
    console.log('Reading note');
    notes.getNote(argv.title)
} else if (command === 'remove') {
    notes.removeNote(argv.title)
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}
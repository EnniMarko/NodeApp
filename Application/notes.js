const fs = require('fs');
const relPath = './AppData/nodesData.json';

var addNote = (title, body) => {
    console.log('Adding note', title, body);
    var note = {
        title,
        body
    };
    let notes = fetchNotes();
    let duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync(relPath, JSON.stringify(notes));
};

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync(relPath));
    }
    catch (e) {
        console.log(e.message)
        return [];
    }
};

var getNote = (title) => {
    console.log(`Getting note by title:\"${title}\"`)
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    if (filteredNotes.length > 1) { throw "The title of the note is not unique in storage" }
    return filteredNotes[0];
}

var removeNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};
module.exports = { addNote, getAll: fetchNotes, getNote, removeNote, logNote}
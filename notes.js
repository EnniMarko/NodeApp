console.log("notes Start!")
module.exports.age = 25
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
};
module.exports.add = (a,b) => {
    console.log("Add from notes.js is called")
return a+b;
}
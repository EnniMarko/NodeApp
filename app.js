console.log('Program start!');
const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes.js");
var user = os.userInfo();
console.log(notes.age);
notes.addNote();
var res = notes.add(2, -7);

// fs.appendFileSync('./test.txt', 'test test test')

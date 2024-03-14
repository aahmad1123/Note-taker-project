const notes = require('express').Router();
let notesDB = require('../db/db.json')
const fs = require ('fs')

//3001/api/notes. This request reads the db.json file and returns a response as json.
notes.get('/', (req, res) => {
    notesDB = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    res.json(notesDB)
});

// this request takes in a new note, writes it to the db.json file, and then outputs it to the client. 
notes.post('/', (req,res) => {
    notesDB = JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    notesDB.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notesDB))
    console.log("New note created")
    res.json(notesDB)
})

module.exports = notes
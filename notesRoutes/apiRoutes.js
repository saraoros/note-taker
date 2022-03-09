const router = require("express").Router();
const { notes } = require("../develop/db/db.json");

// is this file necessary?? Or can I combine it all with notes.js??
// am I supposed to write some sample notes into db.json??
// which method is better? the get code block or post?



// unsure about following code
router.get("/api/notes", (req, res) => {
     let results = notes;
     res.sendFile("../develop/db/db.json");
     results = [].concat(JSON.parse(results));
    res.json(results);
})

router.post("/api/notes", (req, res) => {
    const notes = [].concat(JSON.parse(notes));
    req.body.id = notes.length.toString();

    res.sendFile("./develop/db/db.json");
    notes.push(notes);
})


module.exports = router;
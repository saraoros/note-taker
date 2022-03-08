const router = require("express").Router();
const fs = require('fs');
const path = require('path');



router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../develop/public/notes.html"));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../develop/public/index.html"));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../develop/public/notes.html"));
});



module.exports = router;
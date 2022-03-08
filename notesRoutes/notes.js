const router = require("express").Router();
const fs = require('fs');
const path = require('path');
// const { notes } = require("../develop/db/db");


router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../develop/public/notes.html"));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../develop/public/index.html"));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../develop/public/notes.html"));
});

// examples from module: Would I need something like this?
// router.post("/notes", (req, res) => {
//     req.body.id = notes.length.toString();
  
//     if (!validateZookeeper(req.body)) {
//       res.status(400).send("The zookeeper is not properly formatted.");
//     } else {
//       const zookeeper = createNewZookeeper(req.body, zookeepers);
//       res.json(zookeeper);
//     }
//   });


module.exports = router;
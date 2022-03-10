const express = require('express');
const PORT = process.env.PORT || 3030;
const app = express();
const fs = require('fs');
const path = require('path');
const newTask = [];

// middleware
app.use(express.static('./develop/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/index.html'));
});

// Notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

// Api page
// **** this route is coming up as 'null'
app.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, './db/db.json'), (data) => {
    res.json(JSON.parse(data));
  });
});

app.post('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, './db/db.json'), (err, data) => {
    if (err) throw res.send(404);
    const tasks = JSON.parse(data);
    tasks.push(req.body);
    //tasks.push(tasks);

    // for loop to add new notes into db.json
    for (let i = 0; i < tasks.length; i++) {
      const addTask = {
        title: tasks[i].title,
        text: tasks[i].text,
        id: [i],
      };
      newTask.push(addTask);
    }

    fs.writeFile(
      path.join(__dirname, './db/db.json'),
      JSON.stringify(newTask, null, 2),
      (err) => {
        if (err) throw res.send(404);
        res.json(req.body);
      }
    );
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/notes.html'));
});

app.listen(PORT, () => {
  console.log(`
   ================================== 
    API server now on port ${PORT}!
   ================================== 
    `);
});

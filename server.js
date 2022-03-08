const express = require('express');
const PORT = process.env.PORT || 3030;
const app = express();
const apiRoutes = require('./notesRoutes/apiRoutes');
const notesRoutes = require('./notesRoutes/notes');


app.use(express.static('./develop/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/notes', notesRoutes);
app.use('/api/notes', apiRoutes);


app.listen(PORT, () => {
    console.log(`
   ================================== 
    API server now on port ${PORT}!
   ================================== 
    `);
  });
  
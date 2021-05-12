const express = require('express')
const StudentRoutes = require('./src/routes/student');

/*
*   Define Express
*   Define Port listen
*/

const app = express()
const port = 3000

app.use('/api/v1/', StudentRoutes);

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});

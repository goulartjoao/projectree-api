const express = require('express');
const sequelize = require('./config/database');
const Routes = require('./routes/index.routes');

const app = express();

sequelize.sync().then(() => console.log('DB is connected'));

app.use(express.json());

app.use('/api/projects', Routes)

app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

const express = require('express');
const sequelize = require('./config/database');
const ProjectRoutes = require('./routes/projects.routes');
const FaunaRoutes = require('./routes/faunas.routes');

const app = express();

sequelize.sync().then(() => console.log('DB is connected'));

app.use(express.json());

app.use('/api/projects', ProjectRoutes)
app.use('/api/faunas', FaunaRoutes)

app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

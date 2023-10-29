const express = require('express');
const sequelize = require('./config/database');
const ProjectRoutes = require('./routes/projects.routes');
const FaunaRoutes = require('./routes/faunas.routes');
const FloraRoutes = require('./routes/floras.routes');
const ArticleRoutes = require('./routes/article.routes');

const app = express();

sequelize.sync().then(() => console.log('DB is connected'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

app.use('/api/projects', ProjectRoutes);
app.use('/api/faunas', FaunaRoutes);
app.use('/api/floras', FloraRoutes);
app.use('/api/articles', ArticleRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000. Ready to accept requests!');
});

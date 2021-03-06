import express from 'express';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import path from 'path';
import favicon from 'serve-favicon';

// import posts from './routes/posts';

const app = express();
const port = 3000;
const devPort = 3001;

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);

  devServer.listen(devPort, () => {
    console.log(`webpack-dev-server is listening on port ${devPort}`);
  });
}

// app.use('/', express.static(path.join(__dirname, '/../public')));
app.use(favicon(path.join(__dirname, '/../public/favicon.ico')));
// app.use('/posts', posts);

// app.get('/hello', (req, res) => {
//   return res.send('Can you hear me?');
// });

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const server = app.listen(port, () => {
  console.info(`==> 🌎 Express listening on port ${port}`);
});

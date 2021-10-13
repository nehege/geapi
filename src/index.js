const app = require('./app');

const PORT = process.env.PORT || 2323;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express server is listening on http://localhost:${PORT}`);
});

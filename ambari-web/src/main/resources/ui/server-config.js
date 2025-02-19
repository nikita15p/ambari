// This is a pseudo-code example - adapt to your actual server setup
app.get('/latest/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'latest/index.html'));
});

app.get('/classic/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'classic/index.html'));
});

// Default route to latest view
app.get('/', (req, res) => {
  res.redirect('/latest');
}); 
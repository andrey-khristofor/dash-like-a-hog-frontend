const express = require('express');
const app = express();
app.use(express.static('./dist/dash-like-a-hog-frontend'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/dash-like-a-hog-frontend/'}
);
});

app.listen(process.env.PORT || 8080);

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/albums', require('./routes/albums'));
app.use('/api/songs', require('./routes/songs'));
app.use('/api/singers', require('./routes/singers'));
app.use('/api/sales-managers', require('./routes/salesManagers'));
app.use('/api/instruments', require('./routes/instruments'));
app.use('/api/instrumentalists', require('./routes/instrumentalists'));
app.use('/api/song-singers', require('./routes/songSingers'));

app.get('/', (req, res) => {
  res.send('🎵 Music API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

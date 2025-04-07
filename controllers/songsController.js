const db = require('../config/db');

exports.getAllSongs = (req, res) => {
  db.query('SELECT * FROM songs', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getSongById = (req, res) => {
  db.query('SELECT * FROM songs WHERE song_id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createSong = (req, res) => {
  const { song_name, album_id, duration } = req.body;
  db.query(
    'INSERT INTO songs (song_name, album_id, duration) VALUES (?, ?, ?)',
    [song_name, album_id, duration],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ song_id: result.insertId, message: 'Song created' });
    }
  );
};

exports.updateSong = (req, res) => {
  const { song_name, album_id, duration } = req.body;
  db.query(
    'UPDATE songs SET song_name=?, album_id=?, duration=? WHERE song_id=?',
    [song_name, album_id, duration, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Song updated' });
    }
  );
};

exports.deleteSong = (req, res) => {
  db.query('DELETE FROM songs WHERE song_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Song deleted' });
  });
};

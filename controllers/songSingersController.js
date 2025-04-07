const db = require('../config/db');

exports.getAllSongSingers = (req, res) => {
  db.query('SELECT * FROM song_singers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getSongSingerByIds = (req, res) => {
  const { song_id, singer_id } = req.params;
  db.query(
    'SELECT * FROM song_singers WHERE song_id = ? AND singer_id = ?',
    [song_id, singer_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json(result[0]);
    }
  );
};

exports.createSongSinger = (req, res) => {
  const { song_id, singer_id } = req.body;
  db.query(
    'INSERT INTO song_singers (song_id, singer_id) VALUES (?, ?)',
    [song_id, singer_id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Song-Singer relationship created' });
    }
  );
};

exports.deleteSongSinger = (req, res) => {
  const { song_id, singer_id } = req.params;
  db.query(
    'DELETE FROM song_singers WHERE song_id = ? AND singer_id = ?',
    [song_id, singer_id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Song-Singer relationship deleted' });
    }
  );
};

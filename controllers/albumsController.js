const db = require('../config/db');

exports.getAllAlbums = (req, res) => {
  db.query('SELECT * FROM albums', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getAlbumById = (req, res) => {
  db.query('SELECT * FROM albums WHERE album_id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createAlbum = (req, res) => {
  const { album_name, production_year, production_country, sales_manager_id } = req.body;
  db.query(
    'INSERT INTO albums (album_name, production_year, production_country, sales_manager_id) VALUES (?, ?, ?, ?)',
    [album_name, production_year, production_country, sales_manager_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ album_id: result.insertId, message: 'Album created' });
    }
  );
};

exports.updateAlbum = (req, res) => {
  const { album_name, production_year, production_country, sales_manager_id } = req.body;
  db.query(
    'UPDATE albums SET album_name=?, production_year=?, production_country=?, sales_manager_id=? WHERE album_id=?',
    [album_name, production_year, production_country, sales_manager_id, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Album updated' });
    }
  );
};

exports.deleteAlbum = (req, res) => {
  db.query('DELETE FROM albums WHERE album_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Album deleted' });
  });
};

const db = require('../config/db');

exports.getAllSingers = (req, res) => {
  db.query('SELECT * FROM singers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getSingerById = (req, res) => {
  db.query('SELECT * FROM singers WHERE singer_id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createSinger = (req, res) => {
  const { singer_name, country, birth_year } = req.body;
  db.query(
    'INSERT INTO singers (singer_name, country, birth_year) VALUES (?, ?, ?)',
    [singer_name, country, birth_year],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ singer_id: result.insertId, message: 'Singer created' });
    }
  );
};

exports.updateSinger = (req, res) => {
  const { singer_name, country, birth_year } = req.body;
  db.query(
    'UPDATE singers SET singer_name=?, country=?, birth_year=? WHERE singer_id=?',
    [singer_name, country, birth_year, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Singer updated' });
    }
  );
};

exports.deleteSinger = (req, res) => {
  db.query('DELETE FROM singers WHERE singer_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Singer deleted' });
  });
};

const db = require('../config/db');

exports.getAllInstruments = (req, res) => {
  db.query('SELECT * FROM instruments', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getInstrumentById = (req, res) => {
  db.query('SELECT * FROM instruments WHERE instrument_id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createInstrument = (req, res) => {
  const { instrument_name } = req.body;
  db.query(
    'INSERT INTO instruments (instrument_name) VALUES (?)',
    [instrument_name],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ instrument_id: result.insertId, message: 'Instrument created' });
    }
  );
};

exports.updateInstrument = (req, res) => {
  const { instrument_name } = req.body;
  db.query(
    'UPDATE instruments SET instrument_name=? WHERE instrument_id=?',
    [instrument_name, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Instrument updated' });
    }
  );
};

exports.deleteInstrument = (req, res) => {
  db.query('DELETE FROM instruments WHERE instrument_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Instrument deleted' });
  });
};

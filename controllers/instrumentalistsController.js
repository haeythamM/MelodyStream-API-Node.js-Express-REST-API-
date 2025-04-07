const db = require('../config/db');

exports.getAllInstrumentalists = (req, res) => {
  db.query('SELECT * FROM instrumentalists', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getInstrumentalistById = (req, res) => {
  db.query('SELECT * FROM instrumentalists WHERE instrumentalist_id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createInstrumentalist = (req, res) => {
  const { instrumentalist_name, instrument_id, country, sales_manager_id } = req.body;
  db.query(
    'INSERT INTO instrumentalists (instrumentalist_name, instrument_id, country, sales_manager_id) VALUES (?, ?, ?, ?)',
    [instrumentalist_name, instrument_id, country, sales_manager_id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ instrumentalist_id: result.insertId, message: 'Instrumentalist created' });
    }
  );
};

exports.updateInstrumentalist = (req, res) => {
  const { instrumentalist_name, instrument_id, country, sales_manager_id } = req.body;
  db.query(
    'UPDATE instrumentalists SET instrumentalist_name=?, instrument_id=?, country=?, sales_manager_id=? WHERE instrumentalist_id=?',
    [instrumentalist_name, instrument_id, country, sales_manager_id, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Instrumentalist updated' });
    }
  );
};

exports.deleteInstrumentalist = (req, res) => {
  db.query('DELETE FROM instrumentalists WHERE instrumentalist_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Instrumentalist deleted' });
  });
};

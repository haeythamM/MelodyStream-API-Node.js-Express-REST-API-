const db = require('../config/db');

exports.getAllManagers = (req, res) => {
  db.query('SELECT * FROM sales_managers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getManagerById = (req, res) => {
  db.query('SELECT * FROM sales_managers WHERE sales_manager_id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result[0]);
  });
};

exports.createManager = (req, res) => {
  const { manager_name, email, phone, sales_notes } = req.body;
  db.query(
    'INSERT INTO sales_managers (manager_name, email, phone, sales_notes) VALUES (?, ?, ?, ?)',
    [manager_name, email, phone, sales_notes],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ sales_manager_id: result.insertId, message: 'Manager created' });
    }
  );
};

exports.updateManager = (req, res) => {
  const { manager_name, email, phone, sales_notes } = req.body;
  db.query(
    'UPDATE sales_managers SET manager_name=?, email=?, phone=?, sales_notes=? WHERE sales_manager_id=?',
    [manager_name, email, phone, sales_notes, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Manager updated' });
    }
  );
};

exports.deleteManager = (req, res) => {
  db.query('DELETE FROM sales_managers WHERE sales_manager_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Manager deleted' });
  });
};

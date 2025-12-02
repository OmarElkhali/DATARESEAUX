const { pool } = require('../config/database');

const Reference = {
  create: async (referenceData) => {
    const [result] = await pool.execute(
      'INSERT INTO company_references (logo_path, category) VALUES (?, ?)',
      [referenceData.logo_path, referenceData.category]
    );
    return { id: result.insertId, ...referenceData };
  },

  getAll: async () => {
    const [rows] = await pool.execute('SELECT * FROM company_references');
    return rows;
  },

  getByCategory: async (category) => {
    const [rows] = await pool.execute(
      'SELECT * FROM company_references WHERE category = ?',
      [category]
    );
    return rows;
  },

  findById: async (id) => {
    const [rows] = await pool.execute(
      'SELECT * FROM company_references WHERE id = ?',
      [id]
    );
    return rows[0] || null;
  },

  remove: async (id) => {
    const [result] = await pool.execute(
      'DELETE FROM company_references WHERE id = ?',
      [id]
    );
    return result;
  }
};

module.exports = Reference;

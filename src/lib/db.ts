// lib/db.ts
import pg from 'pg';

const pool = new pg.Pool({
  host: 'sii-postgres.postgres.database.azure.com',
  port: 5432,
  database: 'postgres',
  user: 'jaen',
  password: 'BDnova1!',
  ssl: {
    rejectUnauthorized: false
  }
});

export async function getProducts() {
  try {
    const { rows } = await pool.query('SELECT * FROM productos ORDER BY nombre');
    return rows;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

export async function closePool() {
  await pool.end();
}
// src/lib/db.ts
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

// Función para obtener productos
export async function getProducts() {
  try {
    const { rows } = await pool.query('SELECT * FROM productos ORDER BY nombre');
    return rows;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

// Función para obtener estudiantes
export async function getStudents() {
  try {
    const { rows } = await pool.query('SELECT * FROM estudiantes ORDER BY nombre');
    return rows.map((student) => ({
      ...student,
      horario: typeof student.horario === 'string' 
        ? JSON.parse(student.horario) 
        : student.horario
    }));
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

// Función para cerrar la conexión
export async function closePool() {
  await pool.end();
}
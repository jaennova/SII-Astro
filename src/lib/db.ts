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

export async function insertInvoice(subtotal: number, iva: number, total: number, detalles: any) {
  try {
    const query = `
      INSERT INTO facturas (subtotal, iva, total, detalles, fecha_creacion)
      VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
      RETURNING id`;
    const values = [subtotal, iva, total, JSON.stringify(detalles)];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting invoice:', error);
    throw error;
  }
}

export async function insertProduct(product: {
  nombre: string;
  precio: number;
  descripcion: string;
  imagen_url: string;
}) {
  try {
    const query = `
      INSERT INTO productos (nombre, precio, descripcion, imagen_url)
      VALUES ($1, $2, $3, $4)
      RETURNING id`;
    const values = [product.nombre, product.precio, product.descripcion, product.imagen_url];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error('Error inserting product:', error);
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
import type { APIRoute } from 'astro';
import { getStudents } from '../../lib/db';

export const GET: APIRoute = async () => {
  try {
    const students = await getStudents();
    return new Response(JSON.stringify(students), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache' // Evita problemas de caché
      }
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch students', 
        details: error instanceof Error ? error.message : String(error)
      }), 
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}
import type { APIRoute } from 'astro';
import { insertProduct } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const result = await insertProduct(data);

    return new Response(
      JSON.stringify({ success: true, message: 'Producto creado exitosamente', id: result.id }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error creating product:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al crear el producto',
        error: error instanceof Error ? error.message : String(error)
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
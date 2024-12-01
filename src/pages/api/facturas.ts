import type { APIRoute } from 'astro';
import { insertInvoice } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { subtotal, iva, total, detalles } = data;

    const result = await insertInvoice(subtotal, iva, total, detalles);

    return new Response(
      JSON.stringify({ success: true, message: 'Factura creada exitosamente', id: result.id }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('Error creating invoice:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Error al crear la factura',
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
export default {
  async fetch(request) {
    return new Response('¡Funciona!', {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};

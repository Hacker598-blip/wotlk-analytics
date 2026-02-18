export default {
  async fetch(request, env, ctx) {
    return new Response('¡Hola desde mi Worker!');
  },
};

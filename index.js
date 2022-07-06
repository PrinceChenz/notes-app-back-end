const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) =>{
        return 'hello word'
    }
  })
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ port: 8000 })

server.register(require('Inert'), err => {
  if (err) {throw err}
  server.route([
    {
      method: 'GET',
      path:'/fetchTrue',
      handler: (request, reply) => {
        return reply(true)
      }
    },
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply.file('index.html')
      }
    },
    {
      method: 'GET',
      path: '/bundle.js',
      handler: (request, reply) => {
        reply.file('bundle.js')
      }
    },
    {
      method: 'GET',
      path: '/favicon.ico',
      handler: (request, reply) => {
        reply.file('favicon.ico')
      }
    }
  ])
})

server.start(err => {
    if (err) {
        throw err
    }
    console.log('Server running at:', server.info.uri);
});

// start your server here
const server = require('./api/server')

const port = 5000;

server.listen(port, ()=> console.log(`\nAPI running on port ${port}\n`))

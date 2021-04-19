import server, { PORT } from './server';

// start server
server.listen(PORT, () => console.log('Listening on port:', PORT));

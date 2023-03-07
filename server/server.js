import express from 'express';
import { Server } from 'socket.io';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { createServer } from 'node:http';
import './db/dbConnect.js';

const app = express();
const PORT = process.env.PORT || 3000;

const currentPath = fileURLToPath(import.meta.url);
const publicDir = join(currentPath, '../..', 'public');
app.use(express.static(publicDir));

const server = createServer(app);

server.listen(PORT, () => console.log(`Servidor escutando na PORT ${PORT}`));

const socketServer = new Server(server);

export { socketServer };

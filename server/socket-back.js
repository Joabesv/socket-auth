import 'dotenv/config';
import { mountEventsOnPageStartup } from './events/mount-events-on-page-startup.js';
import { registerDocumentEvents } from './events/register-document-events.js';
import { registerLoginEvents } from './events/register-login-events.js';
import { registerSignUpEvents } from './events/register-sign-up-events.js';
import { socketServer } from './server.js';

socketServer.on('connection', (socket) => {
  // socketServer aka Io
  mountEventsOnPageStartup(socket, socketServer);
  registerSignUpEvents(socket, socketServer);
  registerLoginEvents(socket, socketServer)
  registerDocumentEvents(socket, socketServer);
});

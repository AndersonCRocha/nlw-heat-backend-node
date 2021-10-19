import 'dotenv/config';
import http from 'http';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';

import { router } from './routers';

const app = express()
  .use(cors())
  .use(express.json())
  .use(router);

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
});

export { httpServer, io }
import 'dotenv/config';
import express from 'express';
import { router } from './routers';

const port = process.env.PORT || 4000;

express()
  .use(router)
  .listen(port, () => {
    console.log(`🔥 Server running in http://localhost:${port}`)
  })
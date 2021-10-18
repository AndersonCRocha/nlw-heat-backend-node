import express from 'express';

const port = process.env.PORT || 4000;

express()
  .listen(port, () => {
    console.log(`🔥 Server running in http://localhost:${port}`)
  })